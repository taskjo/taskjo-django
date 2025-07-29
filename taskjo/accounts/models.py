from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from .signals import customuser_created
from core.models import Skill, Project


class CustomUserManager(BaseUserManager):
    """Custom user manager for phone-based authentication"""
    
    def create_user(self, phone, password=None, **extra_fields):
        """Creates and saves user with given phone and password"""
        if not phone:
            raise ValueError(_('شماره تلفن الزامی است!'))
        
        # Normalize phone number
        phone = self.normalize_phone(phone)
        
        user = self.model(phone=phone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
        
    def create_superuser(self, phone, password=None, **extra_fields):
        """Creates and saves superuser with given phone and password"""
        extra_fields.setdefault('is_staff', True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True'))
        
        extra_fields.setdefault('is_superuser', True)
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True'))
        
        return self.create_user(phone, password, **extra_fields)
    
    def normalize_phone(self, phone):
        """Normalize phone number format"""
        # Remove any non-digit characters
        phone = ''.join(filter(str.isdigit, str(phone)))
        
        # Ensure it starts with 9 (Iranian mobile format)
        if phone.startswith('0'):
            phone = phone[1:]
        if not phone.startswith('9'):
            phone = '9' + phone
            
        return phone


class CustomUser(AbstractUser):
    """Custom user model with phone-based authentication"""
    
    username = None  # Disable username field
    
    phone = models.CharField(
        _('شماره تلفن'), 
        max_length=11, 
        unique=True,
        help_text=_('شماره تلفن 11 رقمی به فرمت 9xxxxxxxxx'),
        error_messages={
            'unique': _("این شماره تلفن قبلاً ثبت شده است."),
        },
    )
    
    is_verified = models.BooleanField(
        _('تایید شده'),
        default=False,
        help_text=_('آیا این کاربر شماره تلفن خود را تایید کرده است')
    )
    
    # OTP fields for phone verification
    otp_secret = models.CharField(max_length=64, blank=True, null=True)
    otp_counter = models.PositiveSmallIntegerField(default=0)
    
    # Notification preferences
    send_email = models.BooleanField(
        default=True, 
        verbose_name=_("ارسال ایمیل")
    )
    send_sms = models.BooleanField(
        default=True, 
        verbose_name=_("ارسال پیام کوتاه")
    )
    send_notification = models.BooleanField(
        default=True, 
        verbose_name=_("ارسال اعلان")
    )
    
    # Profile fields
    projects_count = models.PositiveIntegerField(
        default=0, 
        verbose_name=_("تعداد پروژه امروز")
    )
    role = models.CharField(
        max_length=100, 
        verbose_name=_("موقعیت شغلی"), 
        null=True, 
        blank=True
    )
    image = models.ImageField(
        upload_to='uploads/profiles/', 
        verbose_name=_("عکس پروفایل"), 
        blank=True, 
        null=True
    )
    
    # Relationships
    skills = models.ManyToManyField(
        Skill,
        verbose_name=_("مهارت ها"), 
        blank=True,
        related_name='users'
    )
    projects = models.ManyToManyField(
        Project,
        verbose_name=_("پروژه ها"), 
        blank=True,
        related_name='users'
    )
    
    objects = CustomUserManager()

    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = _('کاربر')
        verbose_name_plural = _('کاربران')
        ordering = ['-date_joined']

    def __str__(self):
        return self.phone
    
    def get_full_name(self):
        """Return the full name of the user"""
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name}"
        elif self.first_name:
            return self.first_name
        elif self.email:
            return self.email
        return self.phone
    
    def clean(self):
        """Validate user data"""
        from django.core.exceptions import ValidationError
        
        # Validate phone number format
        if self.phone:
            phone = ''.join(filter(str.isdigit, str(self.phone)))
            if len(phone) != 11 or not phone.startswith('9'):
                raise ValidationError(_("شماره تلفن باید 11 رقمی و با 9 شروع شود"))
    
    def save(self, *args, **kwargs):
        # Normalize phone number before saving
        if self.phone:
            self.phone = self.objects.normalize_phone(self.phone)
        super().save(*args, **kwargs)


# Connect signal
post_save.connect(customuser_created, sender=CustomUser)
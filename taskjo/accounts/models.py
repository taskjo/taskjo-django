from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from .signals import customuser_created
from core.models import Skill,Projects
class CustomeUserManager(BaseUserManager):
    def create_user(self, phone, password=None, **extra_fields):
        """Creates and saves user with given phone and password"""
        if not phone:
            raise ValueError('phone number reuired!')
        user = self.model(phone=phone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
        
    def create_superuser(self, phone, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser muse have is_staff=True')
        extra_fields.setdefault('is_superuser', True)
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser muse have is_superuser=True')
        
        return self.create_user(phone, password, **extra_fields)

class CustomUser(AbstractUser):
    username = None
    phone = models.CharField(_('phone'), max_length=10, unique=True,
    help_text =_('Required 10 digits in 9xx format'),
    error_messages = {
        'unique': _("The phone number is already in use."),
        },
    )
    is_verified = models.BooleanField(
        _('verified'),
        default=False,
        help_text=_(
            'Designates whether this user has verified phone'
        ),
    )
    # TODO add createdat & modifiedat filed for limit resend 
    otp_secret = models.CharField(max_length=64, blank=True, null=True)
    otp_counter = models.SmallIntegerField(default=0)

    # email = 

    send_email = models.BooleanField(default=True, verbose_name="ارسال ایمیل", null=True, blank=True)
    send_sms = models.BooleanField(default=True, verbose_name="ارسال پیام کوتاه", null=True, blank=True)
    send_notification = models.BooleanField(default=True, verbose_name="ارسال ایمیل", null=True, blank=True)
    
    projects_count = models.IntegerField(default=0, verbose_name="تعداد پروژه امروز")

    skills = models.ManyToManyField(Skill,verbose_name="مهارت ها", blank=True)
    projects = models.ManyToManyField(Projects,verbose_name="پروژه ها", blank=True)
    role = models.CharField(max_length=100, verbose_name="موقعیت شغلی", null=True, blank=True)

    # TODO profile image 
    # TODO next version
    # Teams - Country - City - Languages - Task Compiled - Projects Compiled - Connections


    objects = CustomeUserManager()

    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.phone

post_save.connect(customuser_created, sender=CustomUser)
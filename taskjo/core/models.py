from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _


class Website(models.Model):
    """Model for storing website information"""
    
    name = models.CharField(
        verbose_name=_("نام سایت"), 
        max_length=100,
        unique=True
    )        
    url = models.URLField(
        verbose_name=_("لینک سایت"), 
        max_length=200
    )        
    is_active = models.BooleanField(
        verbose_name=_("فعال است"), 
        default=True
    )
    max_page = models.PositiveIntegerField(
        verbose_name=_("بیشترین تعداد صفحه جستجو"), 
        default=0, 
        blank=True, 
        null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _("وبسایت")
        verbose_name_plural = _("وبسایت ها")
        ordering = ['name']

    def __str__(self):
        return self.name 

    @property
    def project_count(self):
        return self.projects.count()


class Category(models.Model):
    """Model for project categories"""
    
    name = models.CharField(
        verbose_name=_("نام دسته بندی"), 
        max_length=100
    ) 
    url = models.URLField(
        verbose_name=_("لینک دسته بندی"), 
        max_length=1024, 
        null=True, 
        blank=True
    )
    website = models.ForeignKey(
        Website, 
        verbose_name=_("وبسایت"),  
        on_delete=models.CASCADE, 
        related_name='categories'
    )
    
    class Meta:
        verbose_name = _("دسته بندی")
        verbose_name_plural = _("دسته بندی ها")
        unique_together = ('name', 'website')
        ordering = ['name']

    def __str__(self): 
        return f"{self.name} - {self.website.name}"


class Skill(models.Model):
    """Model for project skills"""
    
    name = models.CharField(
        verbose_name=_("نام مهارت"), 
        max_length=255
    ) 
    url = models.URLField(
        verbose_name=_("لینک مهارت"), 
        max_length=1024, 
        null=True, 
        blank=True
    )
    website = models.ForeignKey(
        Website, 
        verbose_name=_("وبسایت"),  
        on_delete=models.CASCADE, 
        null=True,
        related_name='skills'
    ) 
    skill_style_class = models.CharField(
        verbose_name=_("کلاس استایل مهارت"), 
        default="", 
        max_length=30, 
        null=True, 
        blank=True
    )
    
    class Meta:
        verbose_name = _("مهارت")
        verbose_name_plural = _("مهارت ها")
        unique_together = ('name', 'website')
        ordering = ['name']

    def __str__(self): 
        return self.name
       
class Employer(models.Model):
    """Model for project employers"""
    
    employer_username = models.CharField(
        verbose_name=_("نام کاربری کارفرما"), 
        max_length=255, 
        null=True
    )    
    employer_url = models.URLField(
        verbose_name=_("لینک کارفرما"), 
        default="https://taskjo.ir/",
        max_length=255
    )
    website = models.ForeignKey(
        Website, 
        verbose_name=_("وبسایت"),  
        on_delete=models.CASCADE, 
        null=True,
        related_name='employers'
    )
    
    class Meta:
        verbose_name = _("کارفرما")
        verbose_name_plural = _("کارفرما ها")
        unique_together = ('employer_url',)
        ordering = ['employer_username']

    def __str__(self): 
        return f"{self.employer_username} => {self.employer_url}"


class Freelancer(models.Model):
    """Model for freelancers"""
    
    name = models.CharField(
        verbose_name=_("نام فریلسنر"), 
        max_length=255
    )    
    star = models.CharField(
        verbose_name=_("تعداد ستاره"), 
        max_length=100, 
        null=True
    )    
    url = models.URLField(
        verbose_name=_("لینک فریلسنر"), 
        max_length=255, 
        null=True
    )    
    
    class Meta:
        verbose_name = _("فریلسنر")
        verbose_name_plural = _("فریلسنر ها")
        ordering = ['name']

    def __str__(self): 
        return self.name


class Project(models.Model):
    """Model for projects"""
    
    STATE_OPEN = 0
    STATE_CLOSE = 1
    STATE_CHOICES = (
        (STATE_OPEN, _('پروژه باز است')),
        (STATE_CLOSE, _('پروژه منقضی شده است'))
    )

    title = models.CharField(
        max_length=255, 
        verbose_name=_("عنوان پروژه")
    )
    created_at = models.DateTimeField(
        verbose_name=_("ایجاد شده در تاریخ"), 
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        verbose_name=_("آپدیت شده در تاریخ"), 
        auto_now=True
    )
    remaining_time = models.DateTimeField(
        verbose_name=_("مهلت پروژه"), 
        null=True, 
        blank=True
    )
    is_active = models.BooleanField(
        verbose_name=_("فعال است"), 
        default=True
    )
    
    # Price fields with proper validation
    price_min = models.PositiveIntegerField(
        verbose_name=_("حداقل قیمت"), 
        default=0,
        validators=[MinValueValidator(0)]
    )
    price_max = models.PositiveIntegerField(
        verbose_name=_("حداکثر قیمت"),
        default=0,
        validators=[MinValueValidator(0)]
    )
    budget = models.DecimalField(
        verbose_name=_("بودجه"),
        max_digits=12, 
        decimal_places=0, 
        default=0,
        validators=[MinValueValidator(0)]
    )
    
    state = models.SmallIntegerField(
        verbose_name=_("وضعیت"), 
        default=STATE_OPEN, 
        editable=False, 
        choices=STATE_CHOICES
    )
    applicants_number = models.PositiveIntegerField(
        verbose_name=_("تعداد پیشنهاد"), 
        default=0
    )
    city = models.CharField(
        verbose_name=_("شهر"), 
        max_length=100, 
        null=True, 
        blank=True
    )
    
    short_link = models.URLField(
        verbose_name=_("لینک کوتاه"),
        max_length=200,
        unique=True
    )
    long_link = models.URLField(
        verbose_name=_("لینک"),
        max_length=1024
    )
    description = models.TextField(
        verbose_name=_("توضیحات")
    )

    # Foreign Keys
    website = models.ForeignKey(
        Website,
        verbose_name=_("وبسایت"),  
        on_delete=models.CASCADE, 
        null=True, 
        blank=True,
        related_name='projects'
    )
    employer = models.ForeignKey(
        Employer,
        verbose_name=_("کارفرما"),  
        on_delete=models.CASCADE, 
        null=True, 
        blank=True,
        related_name='projects'
    )
    category = models.ForeignKey(
        Category,
        verbose_name=_("دسته بندی"),  
        on_delete=models.CASCADE, 
        null=True, 
        blank=True,
        related_name='projects'
    )
    
    # Many-to-Many relationships
    skills = models.ManyToManyField(
        Skill,
        verbose_name=_("مهارت ها"), 
        blank=True,
        related_name='projects'
    )
    freelancers = models.ManyToManyField(
        Freelancer,
        verbose_name=_("فریلسنرها"), 
        blank=True,
        related_name='projects'
    )
    
    # Self-referencing field
    similar_projects = models.ForeignKey(
        'self',
        verbose_name=_("پروژه های مشابه"),  
        on_delete=models.CASCADE, 
        null=True, 
        blank=True,
        related_name='related_projects'
    )
    
    class Meta:
        verbose_name = _("پروژه")
        verbose_name_plural = _("پروژه ها")
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['-created_at']),
            models.Index(fields=['state']),
            models.Index(fields=['is_active']),
        ]

    def __str__(self): 
        return self.title
    
    def clean(self):
        """Validate model data"""
        from django.core.exceptions import ValidationError
        
        if self.price_max < self.price_min:
            raise ValidationError(_("حداکثر قیمت نمی‌تواند کمتر از حداقل قیمت باشد"))
        
        if self.budget < 0:
            raise ValidationError(_("بودجه نمی‌تواند منفی باشد"))
    
    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)
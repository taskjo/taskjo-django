from django.db import models


class Websites(models.Model):

    name = models.CharField(verbose_name="نام سایت", max_length=100)        
    url = models.URLField(verbose_name="لینک سایت", max_length=100)        
    is_active = models.BooleanField(verbose_name="فعال است", default=True)
    max_page =  models.IntegerField(verbose_name=" بیشترین تعداد صفحه جستجو", default=0, blank=True, null=True)       
    class Meta:
        verbose_name = "وبسایت ها"
        verbose_name_plural = "وبسایت ها"

    def __str__(self):
        return self.name 

    @property
    def project_count(self):
        return Projects.objects.filter(website__id=self.id).count()

class Category(models.Model):

    name = models.CharField(verbose_name="نام دسته بندی", max_length=100) 
    url = models.URLField(verbose_name="لینک دسته بندی", max_length=1024, null=True, blank=True)
    website = models.ForeignKey(Websites, verbose_name="وبسایت",  on_delete=models.CASCADE, null=True)
    # TODO check similar category
    class Meta:
        verbose_name = "دسته بندی"
        verbose_name_plural = "دسته بندی ها"
        unique_together = ('name', 'website',)

    def __str__(self): 
        return self.name

class Skill(models.Model):

    name = models.CharField(verbose_name="نام مهارت", max_length=255) 
    url = models.URLField(verbose_name="لینک مهارت", max_length=1024, null=True, blank=True)
    website = models.ForeignKey(Websites, verbose_name="وبسایت",  on_delete=models.CASCADE, null=True) 
    # TODO check similar skill in all websites
    # TODO related to category 
    class Meta:
        verbose_name =  "مهارت"
        verbose_name_plural = "مهارت ها"
        unique_together = ('name', 'website',)

    def __str__(self): 
        return self.name
       
class Employer(models.Model):

    employer_username = models.CharField(verbose_name="نام کاربری کارفرما", max_length=255, null=True)    
    employer_url = models.CharField(verbose_name="لینک کارفرما", default="https://taskjo.ir/",max_length=255)
    website = models.ForeignKey(Websites, verbose_name="وبسایت",  on_delete=models.CASCADE, null=True)
    class Meta:
        verbose_name = "کارفرما"
        verbose_name_plural =  "کارفرما ها"
        unique_together = ('employer_url',)

    def __str__(self): 
        return self.employer_username + ' => ' + self.employer_url

class Freelancer(models.Model):

    name = models.CharField(verbose_name="نام فریلسنر", max_length=255)    
    star = models.CharField(verbose_name="تعداد ستاره", max_length=100, null=True)    
    url = models.CharField(verbose_name="لینک فریلسنر", max_length=255, null=True)    
    class Meta:
        verbose_name = "فریلسنر"
        verbose_name_plural = "فریلسنر ها"

    def __str__(self): 
        return self.name

class Projects(models.Model):

    STATE_OPEN = 0
    STATE_CLOSE = 1
    ACTION_CHOICES = (
        (STATE_OPEN, 'پروژه باز است'),
        (STATE_CLOSE, 'پروژه منقضی شده است')
    )

    title = models.CharField(max_length=255, verbose_name="عنوان پروژه")
    created_at = models.DateTimeField(verbose_name="ایجاد شده در تاریخ", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="آپدیت شده در تاریخ", auto_now=True)
    remaining_time = models.DateTimeField(verbose_name="مهلت پروژه", null=True, blank=True)
    is_active = models.BooleanField(verbose_name="فعال است", default=True)
    # TODO money field like djmoney
    price_min = models.IntegerField(verbose_name="حداقل قیمت", default=0)
    price_max = models.IntegerField(verbose_name="حداکثر قیمت",default=0)

    budget = models.DecimalField(verbose_name="بودجه",max_digits=12, decimal_places=0, default="0")

    
    state = models.SmallIntegerField(verbose_name="وضعیت", default=STATE_OPEN, editable=False, choices=ACTION_CHOICES)
    applicants_number = models.IntegerField(verbose_name="تعداد پیشنهاد", default=0)
    city = models.CharField(verbose_name="شهر", max_length=100, null=True, blank=True)
    
    short_link = models.URLField(verbose_name="لینک کوتاه",max_length=50)
    long_link = models.URLField(verbose_name="لینک",max_length=1024)
    description = models.TextField(verbose_name="توضیحات",)

    website = models.ForeignKey(Websites,verbose_name="وبسایت",  on_delete=models.CASCADE, null=True, blank=True)
    employer = models.ForeignKey(Employer,verbose_name="کارفرما",  on_delete=models.CASCADE, null=True, blank=True)
    category = models.ForeignKey(Category,verbose_name="دسته بندی",  on_delete=models.CASCADE, null=True, blank=True)
    skills = models.ManyToManyField(Skill,verbose_name="مهارت ها", blank=True)
    #TODO add freelancer and simliar projects
    freelancers = models.ManyToManyField(Freelancer,verbose_name="فریلسنرها", blank=True)
    similar_projects = models.ForeignKey('Projects',verbose_name="پروژه های مشابه",  on_delete=models.CASCADE, null=True, blank=True)
    class Meta:
        verbose_name = "پروژه"
        verbose_name_plural = "پروژه ها"
        unique_together = ('short_link',)

    def __str__(self): 
        return self.title
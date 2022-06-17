from django.db import models


class Websites(models.Model):
    class Meta:
        verbose_name = "وبسایت ها"
        verbose_name_plural = "وبسایت ها"

    name = models.CharField(max_length=100)        
    url = models.CharField(max_length=100)        
    # TODO compute the number of project in the website
    project_count = models.CharField(max_length=100) 
    is_active = models.BooleanField(default=True)       

    def __str__(self):
        return self.name 

class Category(models.Model):
    class Meta:
        verbose_name = "دسته بندی"
        verbose_name_plural = "دسته بندی"

    name = models.CharField(max_length=100) 
    # TODO check similar category
    Website = models.ForeignKey(Websites, on_delete=models.CASCADE) 

    def __str__(self): 
        return self.title

class Skill(models.Model):
    class Meta:
        verbose_name =  "مهارت"
        verbose_name_plural = "مهارت ها"

    name = models.CharField(max_length=100) 
    # TODO check similar skill
    Website = models.ForeignKey(Websites, on_delete=models.CASCADE) 

    def __str__(self): 
        return self.title
       
class Employer(models.Model):
    class Meta:
        verbose_name = "کارفرما"
        verbose_name_plural =  "کارفرما ها"

    name = models.CharField(max_length=100)    
    url = models.CharField(max_length=100)  
    Website = models.ForeignKey(Websites, on_delete=models.CASCADE)

    def __str__(self): 
        return self.title

class Freelancer(models.Model):
    name = models.CharField(max_length=100)    
    star = models.CharField(max_length=100)    
    url = models.CharField(max_length=100)    

    def __str__(self): 
        return self.title

class Projects(models.Model):
    class Meta:
        verbose_name = "پروژه"
        verbose_name_plural = "پروژه ها"

    STATE_OPEN = 0
    STATE_CLOSE = 1
    ACTION_CHOICES = (
        (STATE_OPEN, 'OPEN'),
        (STATE_CLOSE, 'CLOSE')
    )

    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    # TODO money field like djmoney
    price_min = models.IntegerField()
    price_max = models.IntegerField()
    deadline = models.DateTimeField(auto_now_add=True)
    url = models.URLField(max_length=200)
    description = models.TextField()
    state = models.SmallIntegerField(default=STATE_OPEN, editable=False, choices=ACTION_CHOICES)
    number_of_views = models.IntegerField(default=0)
    city = models.CharField(max_length=100)
    # TODO URL Field
    short_link = models.CharField(max_length=100)
    long_link = models.CharField(max_length=100)

    Website = models.ForeignKey(Websites, on_delete=models.CASCADE)
    employers = models.ForeignKey(Employer)
    categories = models.ForeignKey(Category)
    skills = models.ManyToManyField(Skill)
    freelancers = models.ManyToManyField(Freelancer)
    similar_projects = models.ForeignKey('Projects')


    def __str__(self): 
        return self.title
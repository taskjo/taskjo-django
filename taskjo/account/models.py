from django.db import models
from django.contrib.auth.models import User


class Account(models.Model):
    class Meta:
        verbose_name = "حساب کاربری"
        verbose_name_plural = "حساب های کاربری "

    user = models.OneToOneField(User,verbose_name="کاربر", on_delete=models.CASCADE)
    name = models.CharField(verbose_name="نام",max_length=100, null=True)
    email = models.EmailField(verbose_name="ایمیل",max_length=100)
    skills = models.ManyToManyField('Skill',verbose_name="مهارت ها", blank=True)
    

    def __str__(self):
        return self.name

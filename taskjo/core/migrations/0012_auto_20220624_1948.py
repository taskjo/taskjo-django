# Generated by Django 3.2 on 2022-06-24 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0011_auto_20220622_1134'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='url',
            field=models.URLField(blank=True, max_length=1024, null=True, verbose_name='لینک دسته بندی'),
        ),
        migrations.AlterField(
            model_name='employer',
            name='employer_url',
            field=models.CharField(default='https://taskjo.ir/', max_length=255, verbose_name='لینک کارفرما'),
        ),
        migrations.AlterField(
            model_name='employer',
            name='employer_username',
            field=models.CharField(max_length=255, null=True, verbose_name='نام کاربری کارفرما'),
        ),
        migrations.AlterField(
            model_name='freelancer',
            name='name',
            field=models.CharField(max_length=255, verbose_name='نام فریلسنر'),
        ),
        migrations.AlterField(
            model_name='freelancer',
            name='url',
            field=models.CharField(max_length=255, null=True, verbose_name='لینک فریلسنر'),
        ),
        migrations.AlterField(
            model_name='projects',
            name='title',
            field=models.CharField(max_length=255, verbose_name='عنوان پروژه'),
        ),
    ]
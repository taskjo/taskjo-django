# Generated by Django 3.2 on 2022-06-20 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_auto_20220618_0912'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='title',
            field=models.CharField(max_length=100, verbose_name='عنوان پروژه'),
        ),
        migrations.AlterUniqueTogether(
            name='category',
            unique_together={('name', 'website')},
        ),
    ]
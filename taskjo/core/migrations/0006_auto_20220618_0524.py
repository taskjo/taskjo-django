# Generated by Django 3.2 on 2022-06-18 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_alter_projects_long_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='long_link',
            field=models.URLField(max_length=500, verbose_name='لینک'),
        ),
        migrations.AlterField(
            model_name='projects',
            name='short_link',
            field=models.URLField(max_length=50, verbose_name='لینک کوتاه'),
        ),
    ]
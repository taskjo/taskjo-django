# Generated by Django 3.2 on 2022-06-18 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20220618_0524'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='long_link',
            field=models.URLField(max_length=1024, verbose_name='لینک'),
        ),
    ]
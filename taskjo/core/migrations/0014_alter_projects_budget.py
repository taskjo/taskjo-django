# Generated by Django 3.2 on 2022-07-01 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0013_websites_max_page'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='budget',
            field=models.DecimalField(decimal_places=0, default='0', max_digits=12, verbose_name='بودجه'),
        ),
    ]
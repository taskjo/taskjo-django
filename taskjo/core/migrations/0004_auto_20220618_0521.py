# Generated by Django 3.2 on 2022-06-18 05:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20220618_0516'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='Website',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.websites', verbose_name='وبسایت'),
        ),
        migrations.AlterField(
            model_name='projects',
            name='categories',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.category', verbose_name='دسته بندی'),
        ),
        migrations.AlterField(
            model_name='projects',
            name='employers',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.employer', verbose_name='کارفرما'),
        ),
        migrations.AlterField(
            model_name='projects',
            name='freelancers',
            field=models.ManyToManyField(blank=True, to='core.Freelancer', verbose_name='فریلسنرها'),
        ),
        migrations.AlterField(
            model_name='projects',
            name='short_link',
            field=models.CharField(max_length=300, verbose_name='لینک کوتاه'),
        ),
        migrations.AlterField(
            model_name='projects',
            name='similar_projects',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.projects', verbose_name='پروژه های مشابه'),
        ),
        migrations.AlterField(
            model_name='projects',
            name='skills',
            field=models.ManyToManyField(blank=True, to='core.Skill', verbose_name='مهارت ها'),
        ),
    ]
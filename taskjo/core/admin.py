from django.contrib import admin
from django.utils.html import format_html
from .models import Projects, Category, Skill, Employer, Freelancer, Websites
from taskjo.utils import jdatetime as jd
# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'website',)
    search_fields = ('name',)
    list_select_related = ('website',)

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'website',)
    search_fields = ('name',)
    list_select_related = ('website',)

admin.site.register(Employer)
admin.site.register(Freelancer)

@admin.register(Projects)
class ProjectsAdmin(admin.ModelAdmin):
    def remaining_time_j(self, obj):
        return jd.pretty_jdatetime_format(obj.remaining_time)

    def clickable_short_link(self, instance):
        return format_html(
            '<a href="{0}" target="_blank">{1}</a>',
            instance.short_link,
            'کلیک کنید'
        )

    def budget_format(self, instance):
        budget = '{:,}'.format(int(instance.budget)/10)
        return format_html(
            '{0} تومان',
            budget)

    remaining_time_j.short_description = "مهلت انجام"
    clickable_short_link.short_description = "لینک کوتاه"
    budget_format.short_description = "بودجه به تومان"


    list_display = (
        'title', 'remaining_time_j', 'website', 'categoriy', 'clickable_short_link', 'budget_format',)
    list_filter = (
        'categoriy',
        'skills',
        'website',
    )
    list_select_related = ('website',)
    search_fields = (
        'title',)


# admin.site.register(Websites)
@admin.register(Websites)
class WebsitesAdmin(admin.ModelAdmin):
    def project_count(self, obj):
        return obj.projects_set.count()
    project_count.short_description = "تعداد پروژه"
    list_display = ('name', 'url', 'is_active', 'project_count')
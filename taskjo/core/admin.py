from django.contrib import admin
from .models import Projects, Category, Skill, Employer, Freelancer, Websites
# Register your models here.
admin.site.register(Projects)
admin.site.register(Category)
admin.site.register(Skill)
admin.site.register(Employer)
admin.site.register(Freelancer)

#TODO add admin fro Projects

# admin.site.register(Websites)
@admin.register(Websites)
class WebsitesAdmin(admin.ModelAdmin):
    def project_count(self, obj):
        return obj.projects_set.count()
    project_count.short_description = "تعداد پروژه"
    list_display = ('name', 'url', 'is_active', 'project_count')
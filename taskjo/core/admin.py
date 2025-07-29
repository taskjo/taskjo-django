from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import Website, Category, Skill, Employer, Freelancer, Project


@admin.register(Website)
class WebsiteAdmin(admin.ModelAdmin):
    list_display = ('name', 'url', 'is_active', 'project_count', 'created_at')
    list_filter = ('is_active', 'created_at')
    search_fields = ('name', 'url')
    ordering = ('name',)
    
    def project_count(self, obj):
        return obj.project_count
    project_count.short_description = _('تعداد پروژه‌ها')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'website', 'url')
    list_filter = ('website',)
    search_fields = ('name', 'website__name')
    ordering = ('website', 'name')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'website', 'skill_style_class')
    list_filter = ('website', 'skill_style_class')
    search_fields = ('name', 'website__name')
    ordering = ('website', 'name')


@admin.register(Employer)
class EmployerAdmin(admin.ModelAdmin):
    list_display = ('employer_username', 'employer_url', 'website')
    list_filter = ('website',)
    search_fields = ('employer_username', 'employer_url', 'website__name')
    ordering = ('website', 'employer_username')


@admin.register(Freelancer)
class FreelancerAdmin(admin.ModelAdmin):
    list_display = ('name', 'star', 'url')
    search_fields = ('name',)
    ordering = ('name',)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'title', 'website', 'category', 'employer', 
        'budget', 'state', 'is_active', 'created_at'
    )
    list_filter = (
        'website', 'category', 'state', 'is_active', 
        'created_at', 'updated_at'
    )
    search_fields = ('title', 'description', 'website__name', 'category__name')
    readonly_fields = ('created_at', 'updated_at')
    filter_horizontal = ('skills', 'freelancers')
    ordering = ('-created_at',)
    
    fieldsets = (
        (_('اطلاعات اصلی'), {
            'fields': ('title', 'description', 'short_link', 'long_link')
        }),
        (_('جزئیات پروژه'), {
            'fields': ('budget', 'price_min', 'price_max', 'applicants_number', 'city')
        }),
        (_('وضعیت'), {
            'fields': ('state', 'is_active', 'remaining_time')
        }),
        (_('ارتباطات'), {
            'fields': ('website', 'category', 'employer', 'skills', 'freelancers', 'similar_projects')
        }),
        (_('تاریخ‌ها'), {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def get_queryset(self, request):
        return super().get_queryset(request).select_related(
            'website', 'category', 'employer'
        ).prefetch_related('skills', 'freelancers')

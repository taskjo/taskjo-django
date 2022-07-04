from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ('phone', 'is_staff', 'first_name',)
    list_filter = ('phone', 'is_staff', 'first_name',)
    fieldsets = (
        (None, {'fields': ('phone', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email' , 'role', 'projects_count','image')}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_verified', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
        (_('taskjo settings'), {'fields': ('send_email', 'send_sms', 'send_notification')}),
        (_('projects'), {'fields': ('projects',)}),
        (_('skills'), {'fields': ('skills',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('phone', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('phone',)
    ordering = ('phone',)

admin.site.register(CustomUser, CustomUserAdmin)
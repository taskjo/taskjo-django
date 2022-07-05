from django import template
from core.models import Projects
from django.utils.html import format_html
from django.shortcuts import get_object_or_404

register = template.Library()


@register.filter(name='user_full_name')
def user_full_name(user):
    if user.is_authenticated:
        return user.get_full_name()
    return "User"

@register.filter(name='user_role')
def user_role(user):
    if user.is_authenticated:
        return user.role
    return "programmer"

@register.filter(name='user_image')
def user_image(user):
    if user.image:
        return user.image.url
    return "/static/img/avatars/1.png"

@register.filter(name='is_related_project')
def is_related_project(user, project_id):
    try:
        if Projects.objects.filter(id=project_id, id__in=user.projects.all()).exists():
            return format_html('<span class="badge bg-success mt-1">نشان شده</span>')
        return format_html('')
    except Exception as e:
        return format_html('')



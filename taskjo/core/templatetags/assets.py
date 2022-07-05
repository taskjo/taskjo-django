from django import template
from django.conf import settings

register = template.Library()


@register.filter(name='assets_path')
def assets_path(mode):
    if settings.DEBUG :
        return settings.STATIC_URL
    return settings.STATIC_ROOT
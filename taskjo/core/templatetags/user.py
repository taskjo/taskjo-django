from django import template


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

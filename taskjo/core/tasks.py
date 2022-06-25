from celery import shared_task
import time
from taskjo.celery import app

from django.core.mail import send_mail
from django.conf import settings


from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.template.loader import render_to_string
from django.template import Context
from django.core.mail import EmailMessage
from django.contrib.auth import get_user_model

from core.models import Projects

User = get_user_model()


@app.task
def set_users_related_project():


    users = User.objects.all()
    for user in users:
        user_projects = Projects.objects.filter(skills__in=user.skills.all()) # TODO created at today
        user.projects.set(user_projects)
        user.projects_count = user_projects.count()
        user.save()

    pass

def send_users_email():
    """
    if user is_verified and send_email and email != None => send count of today projects
    """


    users = User.objects.all()
    plaintext = get_template('core/email.txt')
    htmly     = get_template('core/email.html')

    for user in users:
        if user.email:
            ctx = { 
                'name':user.first_name,
                'count' : user.projects_count,
                'today' : '2022/05/06'
            }
            subject, from_email, to = 'اطلاع رسانی تعداد پروژه امروز', 'mx@taskjo.ir', user.email
            # text_content = plaintext.render(ctx)
            # html_content = htmly.render(ctx)
            html_content = render_to_string('core/email.html', ctx)               
            text_content = "" 
            msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
            msg.attach_alternative(html_content, "text/html")
            try:
                msg.send()
            except Exception as e:
                print(str(e))

     





    # d = Context()

    # TODO email or sms
    # send project cout > 5 
    # send by user setting 
    """
    - count today active projects
    - sms or email or system notification
    - send by user setting

    """
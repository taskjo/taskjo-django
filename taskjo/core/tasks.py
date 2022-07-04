from taskjo.celery import app
from django.conf import settings
from datetime import datetime, timedelta, time

from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.contrib.auth import get_user_model

from core.models import Projects

User = get_user_model()

@app.task
def set_users_related_project():
    """
    Set up daily projects related to user skills.
    """
    users = User.objects.filter(is_active=True, is_verified=True)
    for user in users:
        # start_date by n days ago 00:00:00 datetime - end_date by today 23:59:59 datetime 
        start_date = datetime.combine(datetime.now() - timedelta(days=settings.N_DAYS_AGO) , time.min)
        end_date = datetime.combine(datetime.now(), time.max)
        user_projects = Projects.objects.filter(skills__in=user.skills.all(), created_at__range=(start_date, end_date))
        user.projects.set(user_projects)
        user.projects_count = user_projects.count()
        user.save()

@app.task
def send_users_email(subject="", html_template="", txt_template=""):
    """
    end count of today projects, IF user is_verified and send_email and email != None => send count of today projects
    """
    users = User.objects.filter(is_active=True, is_verified=True, send_email=True)
    for user in users:
        if user.email and user.projects_count > 0:
            ctx = { 
                'name':user.first_name,
                'count' : user.projects_count,
            }
            subject, from_email, to = 'اطلاع رسانی تعداد پروژه امروز', settings.EMAIL_HOST_USER, user.email
            html_content = render_to_string('core/email.html', ctx)               
            text_content = "" 
            msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
            msg.attach_alternative(html_content, "text/html")
            try:
                msg.send()
                print("email send")
            except Exception as e:
                print(str(e))
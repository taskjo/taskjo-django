from __future__ import absolute_import
import os
from celery import Celery
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'taskjo.settings')
app = Celery('taskjo')

app.config_from_object('django.conf.settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')

# app.conf.timezone = 'UTC'
# app.conf.beat_schedule = {
#     'add-every-30-seconds': {
#         'task': 'taskjo_ponisha.tasks.plus',
#         'schedule': 5.0,
#     },
# }

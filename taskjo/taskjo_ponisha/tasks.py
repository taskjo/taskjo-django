from celery import shared_task
# from celery import task
import time
from taskjo.celery import app
from . import spider



# @shared_task()
@app.task
def plus():
    time.sleep(5)
    test = spider.PonishaSpider()
    print('begin')
    test.start_request()
    print("ok")

# celery -A taskjo worker -B -l info
# celery -A taskjo worker -B  -l info --scheduler django_celery_beat.schedulers:DatabaseScheduler
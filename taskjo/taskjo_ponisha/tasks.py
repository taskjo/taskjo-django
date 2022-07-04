from celery import shared_task
# from celery import task
import time
import logging
from taskjo.celery import app
from . import spider
# TODO add logger to this file
# TODO add exception handler to this file
# TODO add try except to this file

logger = logging.getLogger(__name__)

@app.task
def ponisha_spider():
    # TODO add Ponisha parameter
    ponisha_spider = spider.PonishaSpider()
    ponisha_spider.start_request()

# celery -A taskjo worker -B -l info
# celery -A taskjo worker -B  -l info --scheduler django_celery_beat.schedulers:DatabaseScheduler
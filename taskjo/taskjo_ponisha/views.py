from django.shortcuts import render
from django.http import HttpResponse
from .spider import PonishaSpider
from core.models import Projects, Category, Skill, Employer, Freelancer

def index(request):
    test = PonishaSpider()
    test.start_request()
    return HttpResponse('Hello, world. You\'re at the taskjo_ponisha index.')

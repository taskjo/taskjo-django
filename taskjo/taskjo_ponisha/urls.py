

from django.urls import path

from . import views

app_name = 'taskjo_ponisha'
urlpatterns = [
    path('test/', views.index, name='index'),
    # path('<int:pk>/', views.DetailView.as_view(), name='detail'),
]
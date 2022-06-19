

from django.urls import path

from .views import ProjectsList

app_name = 'core'

urlpatterns = [
    path('test/', ProjectsList.as_view()),
    # path('<int:pk>/', views.DetailView.as_view(), name='detail'),
]
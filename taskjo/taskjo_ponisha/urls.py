from django.urls import path
from .views import StatusPageView

app_name = 'taskjo_ponisha'
urlpatterns = [
    path('status', StatusPageView.as_view(), name='ponisha_status'),
]
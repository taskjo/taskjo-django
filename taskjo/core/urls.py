

from django.urls import path

from .views import AdvanceSearchView,ProjectPartialView,IndexPageView,AboutPageView, \
    HelpPageView,ProfilePageView,DashboardPageView,SettingsPageView
app_name = 'core'

urlpatterns = [
    path('', IndexPageView.as_view(), name='index'),
    path('about/', AboutPageView.as_view(), name='about'),
    path('help/', HelpPageView.as_view(), name='help'),

    path('dashboard/', DashboardPageView.as_view(), name='dashboard'),
    path('profile/', ProfilePageView.as_view(), name='profile'),
    path('settings/', SettingsPageView.as_view(), name='settings'),


    path('advance_search/', AdvanceSearchView.as_view(), name='advance_search'),
    path('search/', ProjectPartialView.as_view(), name='search'),
]
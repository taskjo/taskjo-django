

from django.urls import path

from .views import AdvanceSearchView,ProjectPartialView,IndexPageView, \
    HelpPageView,ProfilePageView,DashboardPageView,SettingsPageView,RelatedProjectView
app_name = 'core'

urlpatterns = [
    path('', IndexPageView.as_view(), name='index'),
    path('help/', HelpPageView.as_view(), name='help'),

    path('dashboard/', DashboardPageView.as_view(), name='dashboard'),
    path('profile/', ProfilePageView.as_view(), name='profile'),
    path('settings/', SettingsPageView.as_view(), name='settings'),


    path('search/', AdvanceSearchView.as_view(), name='search'),
    path('advance_search/', ProjectPartialView.as_view(), name='advance_search'),

    path('user_projects/', RelatedProjectView.as_view(), name='user_projects'),
]
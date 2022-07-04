from django.urls import path
from .views import SignUpView, VerifyView, CustomLoginView, ResendVerifyView
from django.contrib.auth import views as auth_views
from django.urls import reverse_lazy
from .forms import CustomPasswordResetForm

app_name = 'accounts'
urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('verify/', VerifyView.as_view(), name='verify'),
    path('verify/resend/', ResendVerifyView.as_view(), name='resend'),
    
    path('login/', CustomLoginView.as_view(template_name='accounts/login.html',), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='accounts/logged_out.html',), name='logout'),
    # TODO test
    path('password_change/', auth_views.PasswordChangeView.as_view(template_name='accounts/password_change_form.html',), name='password_change'),
    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(template_name='accounts/password_change_done.html',), name='password_change_done'),
    # TODO change by send sms
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='accounts/password_reset_form.html', email_template_name = 'accounts/password_reset_email.html', success_url = reverse_lazy('accounts:password_reset_done')), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='accounts/password_reset_done.html',), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='accounts/password_reset_confirm.html', success_url = reverse_lazy('accounts:password_reset_complete')), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='accounts/password_reset_complete.html',), name='password_reset_complete'),
]

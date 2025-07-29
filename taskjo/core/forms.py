from django import forms
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError

UserModel = get_user_model()


class ProfileForm(forms.ModelForm):
    """Profile form for user data management"""
    
    class Meta:
        model = UserModel
        fields = ('first_name', 'last_name', 'role', 'email')
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Add CSS classes and placeholders
        for field in self.fields.values():
            field.widget.attrs.update({'class': 'form-control'})
            
    def clean_email(self):
        email = self.cleaned_data.get('email')
        if email:
            # Check if email is already used by another user
            if UserModel.objects.filter(email=email).exclude(pk=self.instance.pk).exists():
                raise ValidationError(_("این ایمیل قبلاً استفاده شده است"))
        return email


class SettingsForm(forms.ModelForm):
    """Settings form for user preferences"""
    
    class Meta:
        model = UserModel
        fields = ('send_email', 'send_sms', 'send_notification')
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs.update({'class': 'form-check-input'})

    def save(self, commit=True):
        """Save form with proper boolean field handling"""
        instance = super().save(commit=False)
        
        # Handle boolean fields properly
        for field_name in ['send_email', 'send_sms', 'send_notification']:
            if field_name in self.cleaned_data:
                setattr(instance, field_name, bool(self.cleaned_data[field_name]))
        
        if commit:
            instance.save()
        return instance


class UpdateImageForm(forms.ModelForm):
    """Form for updating user profile image"""
    
    class Meta:
        model = UserModel
        fields = ('image',)
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['image'].widget.attrs.update({
            'class': 'form-control',
            'accept': 'image/*'
        })
        
    def clean_image(self):
        image = self.cleaned_data.get('image')
        if image:
            # Check file size (max 5MB)
            if image.size > 5 * 1024 * 1024:
                raise ValidationError(_("حجم فایل نمی‌تواند بیشتر از 5 مگابایت باشد"))
            
            # Check file type
            allowed_types = ['image/jpeg', 'image/png', 'image/gif']
            if image.content_type not in allowed_types:
                raise ValidationError(_("فقط فایل‌های تصویری مجاز هستند"))
                
        return image

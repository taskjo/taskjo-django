from django import forms
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class ProfileForm(forms.ModelForm):
    """
    Public Fields of the Profile Form. Composed by all the Profile model fields.
    """
    class Meta:
        model = UserModel
        exclude = ('creation_date', 'phone', 'public')
        fields = ('first_name', 'last_name','role' , 'email', 'phone')


class SettingsForm(forms.ModelForm):
    """
    Public Fields of the Profile Form. Composed by all the Profile model fields.
    """
    class Meta:
        model = UserModel
        exclude = ('creation_date', 'phone', 'public', 'first_name', 'last_name','role' , 'email',)
        fields = ('phone', 'send_email')

    def save(self, commit=True):
        """
        input : cheked -> False & unckeked -> true
        cheked to unckeked => {'send_email': None}
        unckeked to cheked {'send_email': True}
        """
        instance = super(SettingsForm, self).save(commit=False)

        if self.cleaned_data['send_email']:
            instance.send_email = self.cleaned_data['send_email']
        else:
            instance.send_email = False
        if commit:
            instance.save()
        return instance
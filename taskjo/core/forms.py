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
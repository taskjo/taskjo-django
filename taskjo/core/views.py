from django.shortcuts import render


from django.views.generic.list import ListView
from .models import Projects
 
class ProjectsList(ListView):
 
    # specify the model for list view
    model = Projects

    # def get_queryset(self, *args, **kwargs):
            # name = self.kwargs.get('name', '')
    #     qs = super(ProjectsList, self).get_queryset(*args, **kwargs)
    #     qs = qs.order_by("-id")
    #     return qs

from django.views.generic import TemplateView
from django_celery_beat.models import PeriodicTask


class StatusPageView(TemplateView):
    template_name = "taskjo_ponisha/status.html"
    def get_context_data(self, *args, **kwargs):
        # TODO set status
        panel_title = "Not All Systems Operational"
        refresh_time  = "All Systems Operational"
        panel_class = ['success','warning','danger']

        context = super(StatusPageView,self).get_context_data(*args, **kwargs)
        context['tasks'] = PeriodicTask.objects.all()
        print(context['tasks'])
        return context
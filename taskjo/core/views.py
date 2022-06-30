# View
from django.views.generic import TemplateView,FormView,View
from django.views.generic.list import ListView
# search
from django.db.models import Q
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank, SearchHeadline
# auth
from django.contrib.auth import get_user_model
# mixin
from django.contrib.auth.mixins import LoginRequiredMixin
# paginator
from django.core.paginator import Paginator
from django.core.paginator import EmptyPage
from django.core.paginator import PageNotAnInteger
# render
from django.template.loader import render_to_string
from django.http import JsonResponse
from django.urls import reverse_lazy
# utils
import json 
from traceback import print_tb
from unicodedata import category
from urllib import request
# local 
from .forms import ProfileForm
from .models import Projects, Skill, Websites,Category
from .tasks import set_users_related_project,send_users_email
from .utils import convert_tagify_to_list,create_dashboard_report

UserModel = get_user_model()
class DashboardPageView(LoginRequiredMixin, TemplateView):
    # login_url = '/login/'
    template_name = "core/dashboard.html"
    # TODO add report like active skills projects count 
    # add all project find in taskjo
    def get_context_data(self, *args, **kwargs):
        context = super(DashboardPageView, self).get_context_data(*args, **kwargs)
        user_skills_list = self.request.user.skills.all()[:5]

        usr_proj_list,all_proj_list = create_dashboard_report(user_skills_list,self.request.user)
        
        profile_dict = {
            'usr_proj_list': usr_proj_list,
            'all_proj_list': all_proj_list,
        }
        context.update(profile_dict)
        return context


class ProfilePageView(LoginRequiredMixin, FormView):
    form_class = ProfileForm
    success_url = reverse_lazy('core:profile')
    template_name = "core/profile.html"
    paginate_by = 8

    def post(self,request):
        post = request.POST.copy()
        post['phone'] = request.user.phone
        profile_form = ProfileForm(post, instance=request.user)
        if profile_form.is_valid():
            skills_list = request.POST.get('skills', "")
            skills_obj = Skill.objects.filter(id__in=convert_tagify_to_list(skills_list))
            this_user = UserModel.objects.get(id=request.user.id)
            profile_form.save()
            this_user.skills.set(skills_obj)
        return super(ProfilePageView, self).post(request)

    def get_context_data(self, *args, **kwargs):
        context = super(ProfilePageView, self).get_context_data(*args, **kwargs)

        skills_list = Skill.objects.all().values('id','name',)
        user_skills_list = self.request.user.skills.all().values('id','name',)

        user_related_projects = Projects.objects.all().order_by('-id') # UnorderedObjectListWarning

        paginator = Paginator(user_related_projects, self.paginate_by)

        page = self.request.GET.get('page')

        try:
            user_projects = paginator.page(page)
        except PageNotAnInteger:
            user_projects = paginator.page(1)
        except EmptyPage:
            user_projects = paginator.page(paginator.num_pages)

            

        for skill in skills_list:
            skill['value']= skill['id']
        for skill in user_skills_list:
            skill['value'] = skill['id']

        profile_dict = {
            'name': self.request.user.get_full_name(),
            'first_name' : self.request.user.first_name,
            'last_name' : self.request.user.last_name,
            'email' : self.request.user.email,
            'role' : self.request.user.role,
            'phone' : self.request.user.phone,
            'related_projects' : user_projects,
            'skills' : json.dumps(list(skills_list)),
            'selected_skills' : json.dumps(list(user_skills_list))
        }
        context.update(profile_dict)
        return context

class SettingsPageView(LoginRequiredMixin, TemplateView):
    template_name = "core/settings.html"
    # TODO profile send email --- or notification or disable 
    # TODO use FormView and change user model needed phone

class AdvanceSearchView(LoginRequiredMixin, TemplateView):
    template_name = "core/advance_search.html"


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['skills'] = Skill.objects.all()
        context['websites'] = Websites.objects.all()
        context['categories'] = Category.objects.all() # TODO update for tagify by json
        return context

class ProjectPartialView(LoginRequiredMixin, TemplateView):

    projects = Projects.objects.filter().order_by('-id')[:10]

    def get(self, request):
        query_text = request.GET.get("q")
        sort = request.GET.get("sort_by")


        skills_ids = request.GET.getlist("skills[]") # skills is a list
        websties_ids = request.GET.getlist("websites[]")
        category_ids = request.GET.getlist("categories[]")
        # TODO add query builder
        print(skills_ids)
        print(websties_ids)
        print(category_ids)
        print(query_text)
        print(sort) #.order_by('-score', 'last_name') budget , applicants_number
        is_ajax_request = request.headers.get("x-requested-with") == "XMLHttpRequest"
    
        if is_ajax_request:
            if sort:
                # projects = Projects.objects.filter().order_by(sort)[:10]
                projects = Projects.objects.extra(select={'int_budget': 'CAST(budget AS INTEGER)'}).order_by('int_budget')[:10]
            else:
                projects = Projects.objects.filter().order_by('-id')[:10]
            html = render_to_string(
                    template_name="core/projects_partial_view.html", 
                    context={"projects": projects}
                )

            data_dict = {"html_from_view": html}

        return JsonResponse(data=data_dict, safe=False)

class IndexPageView(TemplateView):
    template_name = "core/index.html"

    def get_context_data(self, *args, **kwargs):
        context = super(IndexPageView,self).get_context_data(*args, **kwargs)
        return context

class HelpPageView(TemplateView):
    template_name = "core/help.html"

class AboutPageView(TemplateView):
    template_name = "core/about.html"
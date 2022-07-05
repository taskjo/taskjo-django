# View
from django.views.generic import TemplateView,FormView,View
# from django.views.generic.list import ListView
# from django.http import HttpResponseRedirect
# from django.urls import reverse
# search
# from django.db.models import Q
# from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank, SearchHeadline
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
from django.shortcuts import get_object_or_404
# utils
import json 
# local 
from .forms import ProfileForm, SettingsForm, UpdateImageForm
from .models import Projects, Skill, Websites,Category
from core.utils import utils

UserModel = get_user_model()

class RelatedProjectView(LoginRequiredMixin, TemplateView):
    template_name = ""
    
    def get(self, request):
        is_ajax_request = request.headers.get("x-requested-with") == "XMLHttpRequest"
        if is_ajax_request:
            proj_id = self.request.GET.get('proj_id')
            action = self.request.GET.get('action')
            proj = get_object_or_404(Projects, id=proj_id)

            if action == "add":
                # TODO add all skills from project to user Or first skills
                self.request.user.projects.add(proj)
            elif action == "delete":
                self.request.user.projects.remove(proj)
            else:
                pass

            data_dict = {"response": True}
            return JsonResponse(data=data_dict, safe=False)

class DashboardPageView(LoginRequiredMixin, TemplateView):
    template_name = "core/dashboard.html"


    def get_context_data(self, *args, **kwargs):
        context = super(DashboardPageView, self).get_context_data(*args, **kwargs)
        user_skills_list = self.request.user.skills.all().order_by('-id')[:5]
        # dshboard projects group by skills # TODO test order by m2m field and prefetch_related
        related_project_list = []
        for skill in user_skills_list:
            related_project = Projects.objects.filter(skills__in=[skill.id],id__in=self.request.user.projects.all())[:5]
            related_project_list.append(related_project)
            # TODO remove skills => project.count == 0
            # if related_project.count() > 0:
            #     related_project_list.append(related_project)

        usr_proj_list,all_proj_list = utils.create_dashboard_report(user_skills_list,self.request.user)
        
        dashboard_dict = {
            'usr_proj_list': usr_proj_list,
            'all_proj_list': all_proj_list,
            'related_project_list': related_project_list,
            'user_skills_list': user_skills_list,
        }

        context.update(dashboard_dict)
        return context

class ProfilePageView(LoginRequiredMixin, FormView):
    form_class = ProfileForm
    success_url = reverse_lazy('core:profile')
    template_name = "core/profile.html"
    paginate_by = 8

    def post(self,request):
        """ Profile Form"""

        post = request.POST.copy()
        post['phone'] = request.user.phone
        profile_form = ProfileForm(post, instance=request.user)
        ImageForm = UpdateImageForm(request.POST, request.FILES, instance=request.user)

        if ImageForm.is_valid():
            ImageForm.save()

        if profile_form.is_valid() and not request.FILES:
            skills_list = request.POST.get('skills', "")
            # get skills list to set M2M field
            skills_obj = Skill.objects.filter(id__in=utils.convert_tagify_to_list(skills_list))
            this_user = UserModel.objects.get(id=request.user.id)
            profile_form.save()
            this_user.skills.set(skills_obj)
        return super(ProfilePageView, self).post(request)

    def get_context_data(self, *args, **kwargs):

        """ get Skills for tagify and pagination """

        context = super(ProfilePageView, self).get_context_data(*args, **kwargs)

        skills_list = Skill.objects.all().values('id','name',)
        user_skills_list = self.request.user.skills.all().values('id','name',)
        user_related_projects = Projects.objects.filter(id__in=self.request.user.projects.all()).order_by('-id') # UnorderedObjectListWarning

        paginator = Paginator(user_related_projects, self.paginate_by)
        page = self.request.GET.get('page')

        try:
            user_projects = paginator.page(page)
        except PageNotAnInteger:
            user_projects = paginator.page(1)
        except EmptyPage:
            user_projects = paginator.page(paginator.num_pages)

        # set value for tagify
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

class SettingsPageView(LoginRequiredMixin, FormView):
    form_class = ProfileForm
    success_url = reverse_lazy('core:settings')
    template_name = "core/settings.html"

    def post(self,request):
        """ Profile Form"""
        post = request.POST.copy()
        post['phone'] = request.user.phone
        settings_form = SettingsForm(post, instance=request.user)

        if settings_form.is_valid():
            settings_form.save()

        return super(SettingsPageView, self).post(request)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['send_email'] = self.request.user.send_email
        return context
# TODO add pagination
class AdvanceSearchView(LoginRequiredMixin, TemplateView):
    template_name = "core/advance_search.html"


    def get_context_data(self, **kwargs):
        # build skills for tagify
        skills_list = Skill.objects.all().values('id','name',)
        for skill in skills_list:
            skill['value']= skill['id']


        context = super().get_context_data(**kwargs)
        context['projects'] = Projects.objects.filter().order_by('-id')[:8]
        context['skills'] = json.dumps(list(skills_list)) # update for tagify by json
        context['websites'] = Websites.objects.all()
        context['categories'] = Category.objects.all() 
        return context
# TODO Fix pagination Or change search method like filter.py and filter form
# use max_page input 
class ProjectPartialView(LoginRequiredMixin, TemplateView):
    paginate_by = 8


    def get(self, request):
        is_ajax_request = request.headers.get("x-requested-with") == "XMLHttpRequest"

        projects = Projects.objects.all().order_by('-id')[:8]
        page = self.request.GET.get('page')
    
        if is_ajax_request:
            filter_list,sort_by = utils.build_search_query(request)
            projects = Projects.objects.filter(filter_list).order_by(sort_by).distinct()
            paginator = Paginator(projects, self.paginate_by)
            

            try:
                result_project = paginator.page(page)
            except PageNotAnInteger:
                result_project = paginator.page(1)
            except EmptyPage:
                result_project = paginator.page(paginator.num_pages)

            html = render_to_string(
                    template_name="core/projects_partial_view.html", 
                    context={"projects": result_project}
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
# View
from django.views.generic import TemplateView, FormView, View
from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.template.loader import render_to_string
from django.http import JsonResponse
from django.urls import reverse_lazy
from django.db.models import Q, Prefetch
from django.contrib import messages
from django.utils.translation import gettext_lazy as _
import json 
import logging

# local 
from .forms import ProfileForm, SettingsForm, UpdateImageForm
from .models import Project, Skill, Website, Category
from core.utils import utils

logger = logging.getLogger(__name__)
UserModel = get_user_model()


class RelatedProjectView(LoginRequiredMixin, TemplateView):
    """View for managing user's related projects"""
    template_name = ""
    
    def get(self, request):
        is_ajax_request = request.headers.get("x-requested-with") == "XMLHttpRequest"
        
        if not is_ajax_request:
            return JsonResponse({"error": "Invalid request"}, status=400)
            
        try:
            proj_id = request.GET.get('proj_id')
            action = request.GET.get('action')
            
            if not proj_id or not action:
                return JsonResponse({"error": "Missing required parameters"}, status=400)
            
            project = get_object_or_404(Project, id=proj_id)

            if action == "add":
                request.user.projects.add(project)
                message = _("پروژه با موفقیت اضافه شد")
            elif action == "delete":
                request.user.projects.remove(project)
                message = _("پروژه با موفقیت حذف شد")
            else:
                return JsonResponse({"error": "Invalid action"}, status=400)

            return JsonResponse({
                "response": True,
                "message": message
            })
            
        except Exception as e:
            logger.error(f"Error in RelatedProjectView: {e}")
            return JsonResponse({"error": "Internal server error"}, status=500)


class DashboardPageView(LoginRequiredMixin, TemplateView):
    """Dashboard view with user statistics"""
    template_name = "core/dashboard.html"

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        
        try:
            # Optimize queries with select_related and prefetch_related
            user_skills_list = (
                self.request.user.skills
                .select_related('website')
                .order_by('-id')[:5]
            )
            
            # Get user projects with prefetch to avoid N+1 queries
            user_projects = (
                self.request.user.projects
                .select_related('website', 'category', 'employer')
                .prefetch_related('skills')
            )
            
            # Build related projects list more efficiently
            related_project_list = []
            for skill in user_skills_list:
                related_projects = (
                    user_projects
                    .filter(skills=skill)
                    .order_by('-created_at')[:5]
                )
                if related_projects.exists():
                    related_project_list.append(related_projects)

            # Generate dashboard reports
            usr_proj_list, all_proj_list = utils.create_dashboard_report(
                user_skills_list, 
                self.request.user
            )
            
            dashboard_dict = {
                'usr_proj_list': usr_proj_list,
                'all_proj_list': all_proj_list,
                'related_project_list': related_project_list,
                'user_skills_list': user_skills_list,
            }

            context.update(dashboard_dict)
            
        except Exception as e:
            logger.error(f"Error in DashboardPageView: {e}")
            messages.error(self.request, _("خطا در بارگذاری داشبورد"))
            
        return context


class ProfilePageView(LoginRequiredMixin, FormView):
    """Profile management view"""
    form_class = ProfileForm
    success_url = reverse_lazy('core:profile')
    template_name = "core/profile.html"
    paginate_by = 8

    def post(self, request):
        """Handle profile form submission"""
        try:
            post = request.POST.copy()
            post['phone'] = request.user.phone
            
            profile_form = ProfileForm(post, instance=request.user)
            image_form = UpdateImageForm(request.POST, request.FILES, instance=request.user)

            # Handle image upload
            if request.FILES and image_form.is_valid():
                image_form.save()
                messages.success(request, _("تصویر پروفایل با موفقیت بروزرسانی شد"))

            # Handle profile data
            if profile_form.is_valid():
                skills_list = request.POST.get('skills', "")
                skills_obj = Skill.objects.filter(
                    id__in=utils.convert_tagify_to_list(skills_list)
                )
                
                # Update user profile
                user = UserModel.objects.get(id=request.user.id)
                profile_form.save()
                user.skills.set(skills_obj)
                
                messages.success(request, _("پروفایل با موفقیت بروزرسانی شد"))
            else:
                messages.error(request, _("خطا در بروزرسانی پروفایل"))
                
        except Exception as e:
            logger.error(f"Error in ProfilePageView post: {e}")
            messages.error(request, _("خطا در بروزرسانی پروفایل"))
            
        return super().post(request)

    def get_context_data(self, *args, **kwargs):
        """Get context data for profile page"""
        context = super().get_context_data(*args, **kwargs)

        try:
            # Optimize queries
            skills_list = (
                Skill.objects
                .values('id', 'name')
                .order_by('name')
            )
            
            user_skills_list = (
                self.request.user.skills
                .values('id', 'name')
                .order_by('name')
            )
            
            user_related_projects = (
                self.request.user.projects
                .select_related('website', 'category')
                .prefetch_related('skills')
                .order_by('-created_at')
            )

            # Pagination
            paginator = Paginator(user_related_projects, self.paginate_by)
            page = self.request.GET.get('page')

            try:
                user_projects = paginator.page(page)
            except PageNotAnInteger:
                user_projects = paginator.page(1)
            except EmptyPage:
                user_projects = paginator.page(paginator.num_pages)

            # Prepare data for tagify
            for skill in skills_list:
                skill['value'] = skill['id']
            for skill in user_skills_list:
                skill['value'] = skill['id']

            profile_dict = {
                'name': self.request.user.get_full_name(),
                'first_name': self.request.user.first_name,
                'last_name': self.request.user.last_name,
                'email': self.request.user.email,
                'role': self.request.user.role,
                'phone': self.request.user.phone,
                'related_projects': user_projects,
                'skills': json.dumps(list(skills_list)),
                'selected_skills': json.dumps(list(user_skills_list))
            }
            context.update(profile_dict)
            
        except Exception as e:
            logger.error(f"Error in ProfilePageView get_context_data: {e}")
            messages.error(self.request, _("خطا در بارگذاری پروفایل"))
            
        return context


class SettingsPageView(LoginRequiredMixin, FormView):
    """Settings management view"""
    form_class = ProfileForm
    success_url = reverse_lazy('core:settings')
    template_name = "core/settings.html"

    def post(self, request):
        """Handle settings form submission"""
        try:
            post = request.POST.copy()
            post['phone'] = request.user.phone
            settings_form = SettingsForm(post, instance=request.user)

            if settings_form.is_valid():
                settings_form.save()
                messages.success(request, _("تنظیمات با موفقیت بروزرسانی شد"))
            else:
                messages.error(request, _("خطا در بروزرسانی تنظیمات"))
                
        except Exception as e:
            logger.error(f"Error in SettingsPageView post: {e}")
            messages.error(request, _("خطا در بروزرسانی تنظیمات"))
            
        return super().post(request)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['send_email'] = self.request.user.send_email
        return context


class AdvanceSearchView(LoginRequiredMixin, TemplateView):
    """Advanced search view"""
    template_name = "core/advance_search.html"
    paginate_by = 8

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        
        try:
            # Build skills for tagify
            skills_list = (
                Skill.objects
                .values('id', 'name')
                .order_by('name')
            )
            for skill in skills_list:
                skill['value'] = skill['id']

            # Get projects with pagination
            projects_obj = (
                Project.objects
                .select_related('website', 'category', 'employer')
                .prefetch_related('skills')
                .filter(is_active=True)
                .order_by('-created_at')
            )
            
            paginator = Paginator(projects_obj, self.paginate_by)
            page = self.request.GET.get('page')
            
            try:
                project_paginator = paginator.page(page)
            except PageNotAnInteger:
                project_paginator = paginator.page(1)
            except EmptyPage:
                project_paginator = paginator.page(paginator.num_pages)

            context.update({
                'projects': project_paginator,
                'skills': json.dumps(list(skills_list)),
                'websites': Website.objects.filter(is_active=True),
                'categories': Category.objects.all()
            })
            
        except Exception as e:
            logger.error(f"Error in AdvanceSearchView: {e}")
            messages.error(self.request, _("خطا در بارگذاری جستجو"))
            
        return context


class ProjectPartialView(LoginRequiredMixin, TemplateView):
    """Partial view for AJAX project loading"""
    paginate_by = 8

    def get(self, request):
        is_ajax_request = request.headers.get("x-requested-with") == "XMLHttpRequest"

        if not is_ajax_request:
            # Return initial projects for non-AJAX requests
            projects = (
                Project.objects
                .select_related('website', 'category', 'employer')
                .prefetch_related('skills')
                .filter(is_active=True)
                .order_by('-created_at')[:8]
            )
            return render(request, "core/projects_partial_view.html", {
                'projects': projects,
                'user': request.user
            })
    
        try:
            # Handle AJAX requests with filtering
            filter_list, sort_by = utils.build_search_query(request)
            projects = (
                Project.objects
                .select_related('website', 'category', 'employer')
                .prefetch_related('skills')
                .filter(filter_list)
                .order_by(sort_by)
                .distinct()
            )
            
            paginator = Paginator(projects, self.paginate_by)
            page = request.GET.get('page')

            try:
                result_project = paginator.page(page)
            except PageNotAnInteger:
                result_project = paginator.page(1)
            except EmptyPage:
                result_project = paginator.page(paginator.num_pages)

            html = render_to_string(
                template_name="core/projects_partial_view.html", 
                context={
                    'projects': result_project,
                    'user': request.user,
                    'max_page': result_project.paginator.num_pages
                }
            )
            
            return JsonResponse({
                "html_from_view": html,
                "max_page": result_project.paginator.num_pages
            })
            
        except Exception as e:
            logger.error(f"Error in ProjectPartialView: {e}")
            return JsonResponse({
                "error": _("خطا در بارگذاری پروژه‌ها")
            }, status=500)


class IndexPageView(TemplateView):
    """Home page view"""
    template_name = "core/index.html"

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        return context


class HelpPageView(TemplateView):
    """Help page view"""
    template_name = "core/help.html"


def handler404(request, exception):
    """Custom 404 handler"""
    return render(request, 'core/404.html', {}, status=404)
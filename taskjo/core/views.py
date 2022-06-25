from ast import And, AnnAssign
from unicodedata import category
from django.shortcuts import render
from django.db.models import Q
from django.views.generic.list import ListView
from django.views.generic import TemplateView
from .models import Projects, Skill, Websites,Category
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank, SearchHeadline
from django.contrib.auth.mixins import LoginRequiredMixin
from django.template.loader import render_to_string
from django.http import JsonResponse

from .tasks import set_users_related_project,send_users_email
class DashboardPageView(LoginRequiredMixin, TemplateView):
    # login_url = '/login/'
    template_name = "core/dashboard.html"
    # TODO add report like active skills projects count 
    # add all project find in taskjo

class ProfilePageView(LoginRequiredMixin, TemplateView):
    template_name = "core/profile.html"
    # TODO form change password and profile detail like skills - name 

class SettingsPageView(LoginRequiredMixin, TemplateView):
    template_name = "core/settings.html"
    # TODO profile send email --- or notification or disable 

class AdvanceSearchView(LoginRequiredMixin, TemplateView):
    template_name = "core/advance_search.html"


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['skills'] = Skill.objects.all()
        context['websites'] = Websites.objects.all()
        context['categories'] = Category.objects.all()
        return context

class ProjectPartialView(LoginRequiredMixin, TemplateView):

    projects = Projects.objects.filter().order_by('-id')[:10]

    def get(self, request):
        query_text = request.GET.get("q")
        sort = request.GET.get("sort_by")


        skills_ids = request.GET.getlist("skills[]") # skills is a list
        websties_ids = request.GET.getlist("websites[]")
        category_ids = request.GET.getlist("categories[]")

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
        # context['message'] = 'Hello World!'
        # set_users_related_project()
        send_users_email()
        return context



class HelpPageView(TemplateView):
    template_name = "core/help.html"
class AboutPageView(TemplateView):
    template_name = "core/about.html"




# TOOD postgresql

    # def get_queryset(self):
    #     query = self.request.GET.get("q")
    #     search_vector = SearchVector("title", "description")
    #     search_query = SearchQuery(query)
    #     search_headline = SearchHeadline("description", search_query)

    #     return (
    #         Projects.objects.annotate(
    #             search=search_vector, rank=SearchRank(search_vector, search_query)
    #         )
    #         .annotate(headline=search_headline)
    #         .filter(search=search_query)
    #         .order_by("-rank")
    #     )




# class SearchResultsList(ListView):
#     model = Quote
#     context_object_name = "quotes"
#     template_name = "search.html"

#     def get_queryset(self):
#         query = self.request.GET.get("q")
#         return Quote.objects.filter(
#             Q(name__icontains=query) | Q(quote__icontains=query)
#         )

# def search_view(request):
#     countries = Country.objects.all()
#     form = SearchForm(request.GET)
#     if form.is_valid():
#         if form.cleaned_data["q"]:
#             countries = countries.filter(name__icontains=form.cleaned_data["q"])
#         elif form.cleaned_data["government_type"]:
#             countries = countries.filter(government=form.cleaned_data["government_type"])
#         elif form.cleaned_data["industry"]:
#             countries = countries.filter(industries=form.cleaned_data["industries"])
#     return render(request, "country/search.html",
#             {"form": form, "country_list": countries})
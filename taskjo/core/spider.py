import requests
import logging
from bs4 import BeautifulSoup
from datetime import datetime, timedelta
import pytz
from .models import Projects, Category, Skill, Employer, Freelancer, Websites
logger = logging.getLogger(__name__)

site_url = ''
site_serach_url = ''

class BaseSpider:

    def __init__(self):
        self.project_links = []
        #TODO get max_page from db
        self.site_search_url = site_serach_url
        self.max_page = 1
        self.page = 1
        # TODO website instance
        # self.website_instance = Websites.objects.get_or_create(name='ponisha', url=site_url)[0]

    def start_request(self, skills=[], category=None):
        self.is_repeat = True
        while self.is_repeat and self.page <= self.max_page:
            pass

    def build_url(self, page=1, skills=[], type='search', category=None):
        pass

    def get_project_list(self, response):
        pass

    def get_project_dict(self, project_selector):
        """ get project dict by project_selector(html) -> from search page """
        pass

    def get_full_project_page(self, project_dict):
        """ get full project page -> by response(html) and fill project_dict """
        pass  

    def check_project_exist(self, project_dict):
        """ check if project exist in db """
        pass

    def get_skills_from_db(self, skills_result):
        """create and get skills from db """
        for skill in skills_result:
            Skill.objects.update_or_create(name=skill.name, url=skill.url, website=self.website_instance)

        # skills_obj = Skill.objects.bulk_create(skills_result)

        skills_query_obj =  Skill.objects.filter(name__in=skills_result, website=self.website_instance)

        return skills_query_obj
    
    def get_category_from_db(self, category):
        """ get category from db """
        category_obj , created = Category.objects.update_or_create(
            name=category['name'],url=category['url'], website=self.website_instance)
        if created:
            return category_obj
        return Category.objects.get(name=category['name'],url=category['url'], website=self.website_instance)

    def get_employer_from_db(self, employer):
        """ get employer from db """
        employer_obj , created = Employer.objects.update_or_create(
            employer_username=employer['employer_username'],employer_url=employer['employer_url'], website=self.website_instance)
        if created:
            return employer_obj
        return Employer.objects.get(employer_username=employer['employer_username'],employer_url=employer['employer_url'], website=self.website_instance)

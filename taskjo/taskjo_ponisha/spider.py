import requests
import logging
from bs4 import BeautifulSoup
from datetime import datetime, timedelta
import pytz

from core.models import Projects, Category, Skill, Employer, Freelancer, Websites
# TODO add logger to this file
# TODO add exception handler to this file
# TODO add try except to this file
# TODO FIX max-retries-exceeded-with-url-in-requests

logger = logging.getLogger(__name__)

site_url = 'https://www.ponisha.com/'
site_serach_url = 'https://ponisha.ir/search/projects/'

class PonishaSpider:

    def __init__(self):
        self.project_links = []
        #TODO get max_page from db
        self.site_search_url = site_serach_url
        self.max_page = 1
        self.page = 1
        self.website_instance = Websites.objects.get_or_create(name='ponisha', url=site_url)[0]

    def start_request(self, skills=[], category=None):
        self.is_repeat = True
        while self.is_repeat and self.page <= self.max_page:
            # TODO FIX build_url
            url = self.build_url(skills)
            page = requests.get(self.site_search_url)
            response = BeautifulSoup(page.content, 'html.parser')
            projects = self.get_project_list(response)
            if projects:
                self.is_repeat = self.check_project_exist(self.get_project_dict(project_selector=projects[0]))
            projects.reverse()

            for project in projects:
                try:
                    project_dict = self.get_project_dict(project_selector=project)
                    project_result, skills_result = self.get_full_project_page(project_dict=project_dict)

                    # add category
                    # add freelancers
                    skills_query_obj =  self.get_skills_from_db(skills_result)
                        
                    project_obj = Projects.objects.create(**project_result)
                    project_obj.skills.set(skills_query_obj)
                except Exception as e:
                    print(e)  
                    self.is_repeat = False
                    break

            self.page += 1

    def build_url(self, page=1, skills=[], type='search', category=None):
        """ build url by skills 
        https://ponisha.ir/search/projects/skill-{}/ % skill
        https://ponisha.ir/search/projects/category-{}/ % category 
        https://ponisha.ir/search/projects/type-{}/ % type
        https://ponisha.ir/search/projects/page/ % page
        """
        # https://ponisha.ir/search/projects/page/2
        url = self.site_search_url + 'page/' + str(page)
        # TODO add skills
        # for skill in skills:
        #     url += 'skills[]=' + urllib.parse.quote(skill) + '&'    
        return url

    def get_project_list(self, response):
        return response.find_all("li", {"class": "item relative"})

    def get_project_dict(self, project_selector):
        """ get project dict by project_selector(html) -> from search page """
        return {
            # 'updated_at': datetime.datetime.now(),
            'title' : project_selector.find('div',{"class": "title"}).get_text(strip=True),
            'skills' : project_selector.find('div',{"class": "labels",}).find_all('a', {"class": "no-link-inherit"}),
            'budget' : project_selector.find('div', {"class": "budget"}).find('span')['amount'],
            'applicants_number' : ''.join([n for n in ''.join(project_selector.find('div',{"class": "row pt+"}).get_text(strip=True)) if n.isdigit()]),
            'remaining_time' : project_selector.find("span", {"data-original-title": True}).get_text(strip=True),
            'long_link' : project_selector.find('div',{"class": "title"}).find('a')['href']

        }

    def get_full_project_page(self, project_dict):
        """ get full project page -> by response(html) and fill project_dict """

        page = requests.get(project_dict['long_link'])
        response = BeautifulSoup(page.content, 'html.parser')

        # TODO add project state
        # TODO this part needed after write cleen function
        # project_dict['state'] = response.find('div',{"class": "border-rad-md"}).get_text(strip=True) # project state

        project_dict['short_link'] = response.find('share')['short-link']
        project_dict['description'] = response.find('div',{"class": "pt+"}).get_text(strip=True)
        project_dict['remaining_time'] = self.fix_remaining_time(project_dict['remaining_time'])

        project_dict['employer'] = {
            'employer_username' : response.find('div',{"class": "clearfix pv"}).find_all('a')[0].get_text(strip=True),
            'employer_url' : response.find('div',{"class": "clearfix pv"}).find_all('a')[0]['href']
        }
        project_dict['categoriy'] = {
            'name' : response.find('div',{"class": "clearfix pv"}).find_all('a')[1].get_text(strip=True),
            'url' : response.find('div',{"class": "clearfix pv"}).find_all('a')[1]['href']
        }

        project_dict['employer'] = self.get_employer_from_db(project_dict['employer'])
        project_dict['categoriy'] = self.get_category_from_db(project_dict['categoriy'])
        project_dict['website'] = self.website_instance


        skill_array = []
        for skill in project_dict['skills']:
            # TODO add skill to list of skills
            skill_array.append(Skill(name=skill['title'], url=skill['href'], website=self.website_instance))

        project_dict.pop('skills', None) # used get_skills_from_db

        return project_dict, skill_array    

    def check_project_exist(self, project_dict):
        """ check if project exist in db """
        # TODO update this function
        if project_dict['long_link'] in self.project_links:
            return False

        return True

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

    def fix_remaining_time(self, remaining_time):
        """ fix remaining time """
        fix_date_regex = "(\d+) روز, (\d+) ساعت"
        fix_day_regex = "(\d+) روز"
        fix_hour_regex = "(\d+) ساعت"
        import re

        day = re.findall(fix_day_regex, remaining_time)
        if day:
            day = int(day[0])
        else:
            day=0
        hour = re.findall(fix_hour_regex, remaining_time)
        if hour:
            hour = int(hour[0])
        else:
            hour=0

        return datetime.now(pytz.utc)+timedelta(days=day, hours=hour)
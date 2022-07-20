from django.db.models import Q
from django.db.models import Count
from core.models import Projects
from .skill_class_finder import BXL_DEFAULT
import json 

def convert_tagify_to_list(tagified_list):
    result_list = []
    if tagified_list:
        # Converting string to list
        skills_list=json.loads(tagified_list)
        result_list =  [skill['id'] for skill in skills_list]
    return result_list

def create_dashboard_report(user_skills_list, current_user):
    """
    Build reports for charts,The output is two arrays of data.
    """
    usr_proj_list = []
    all_proj_list = []
    exclude_proj_list = []
    value_max = Projects.objects.all().count()
    for index,skill in enumerate(user_skills_list):
        usr_skill_dict = {}
        all_skill_dic = {}

        all_skill_dic['name'] = usr_skill_dict['name'] = skill.name

        usr_skill_dict['obj'] = Projects.objects.filter(skills=skill, id__in=current_user.projects.all()) \
                                                        .filter(~Q(id__in=exclude_proj_list))
        usr_skill_dict['valuenow'] = usr_skill_dict['obj'].count()
        usr_skill_dict['valuemax'] = Projects.objects.filter(id__in=current_user.projects.all()).count()

        all_skill_dic['valuenow'] = Projects.objects.filter(skills=skill).count()
        all_skill_dic['value_max'] = value_max

        usr_skill_dict['class'] = set_skills_class("bg", usr_skill_dict['name'], index=index)
        all_skill_dic['class'] = set_skills_class("bx", skill=skill, index=index)

        usr_proj_list.append(usr_skill_dict)
        all_proj_list.append(all_skill_dic)

        # TODO FIX dublicated projects in dashboard report need Review
        for proj in usr_proj_list:
            proj_ids = [proj.id for proj in proj['obj']]
            exclude_proj_list.extend(proj_ids)

    usr_proj_list = compute_percentage(usr_proj_list)
    return usr_proj_list,all_proj_list

def compute_percentage(proj_list):

    for proj in proj_list:
        if proj['valuemax'] > 0:
            proj['valuenow_count'] = proj['valuenow']
            proj['valuenow'] = round(100 * float(proj['valuenow'] / proj['valuemax']),2)
    return proj_list

def set_skills_class(class_type="",skill="",index=0):

    usr_class_list = ['primary','success','danger','info','primary']

    if class_type == "bx":
        skill_class = skill.skill_style_class
        if skill_class == "":
            skill_class = BXL_DEFAULT
        return skill_class
    if class_type == "bg":
        return  usr_class_list[index]
    return BXL_DEFAULT
 
def build_search_query(request):
    sort_by = '-id'
    query_text = request.GET.get("q")
    min_price = request.GET.get("min_price")
    max_price = request.GET.get("max_price")
    sort = request.GET.get("sort_by")
    skills_ids = request.GET.getlist("skills[]") # get array of id
    websties_ids = request.GET.getlist("websites[]")
    category_ids = request.GET.getlist("categories[]")
    
    min_price = convert_budget_decimal(min_price)
    max_price = convert_budget_decimal(max_price)
    
    qdict = {
        'title__contains': query_text,
        'description__contains': query_text,
        'skills__in': skills_ids,
        'website__in': websties_ids,
        'category__in': category_ids,
        'budget__gte': min_price,
        'budget__lte': max_price
    }
    # filter out None values
    not_none_parameters = {single_query: qdict.get(single_query) for single_query in qdict 
        if qdict.get(single_query) != '' and qdict.get(single_query) != [] and qdict.get(single_query) != None}
    
    filter_list = Q()
    for item in not_none_parameters:
        filter_list &= Q(**{item:not_none_parameters.get(item)})
    if sort:
        sort_by = sort
    return filter_list,sort_by

def convert_budget_decimal(value):
    budget = str(value).replace(",","")
    if budget.isdigit():
        return int(float(budget)*10)

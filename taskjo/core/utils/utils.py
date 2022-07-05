from django.db.models import Q
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
    value_max = Projects.objects.all().count()
    for index,skill in enumerate(user_skills_list):
        usr_skill_dict = {}
        all_skill_dic = {}

        all_skill_dic['name'] = usr_skill_dict['name'] = skill.name

        usr_skill_dict['valuenow'] = Projects.objects.filter(skills=skill,id__in=current_user.projects.all()).count()
        usr_skill_dict['valuemax'] = Projects.objects.filter(id__in=current_user.projects.all()).count()

        all_skill_dic['valuenow'] = Projects.objects.filter(skills=skill).count()
        all_skill_dic['value_max'] = value_max

        usr_skill_dict['class'] = set_skills_class("bg",usr_skill_dict['name'],index=index)
        all_skill_dic['class'] = set_skills_class("bx",skill=skill,index=index)

        usr_proj_list.append(usr_skill_dict)
        all_proj_list.append(all_skill_dic)

    usr_proj_list = compute_percentage(usr_proj_list)
    return usr_proj_list,all_proj_list

def compute_percentage(proj_list):

    for proj in proj_list:
        proj['valuenow'] = round(100 * float(proj['valuenow'] / proj['valuemax']),2)
        proj['valuemax'] = proj['valuemax']
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
    sort = request.GET.get("sort_by")
    skills_ids = request.GET.getlist("skills[]") # get array of id
    websties_ids = request.GET.getlist("websites[]")
    category_ids = request.GET.getlist("categories[]")

    qdict = {
        'title__contains': query_text,
        'skills__in': skills_ids,
        'website__in': websties_ids,
        'category__in': category_ids,
    }
    # filter out None values
    not_none_parameters = {single_query: qdict.get(single_query) for single_query in qdict if qdict.get(single_query) != '' and qdict.get(single_query) != []}
    filter_list = Q()
    for item in not_none_parameters:
        filter_list &= Q(**{item:not_none_parameters.get(item)})
    # set description
    if query_text:
        filter_list |= Q(**{'description__contains':query_text}) # need review -> search_vector and rank 
    if sort:
        sort_by = sort
    return filter_list,sort_by

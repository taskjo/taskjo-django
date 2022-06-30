import json 
import os
from django.conf import settings
from .models import Projects

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
        all_skill_dic['class'] = set_skills_class(all_skill_dic['name'],index=index)

        usr_proj_list.append(usr_skill_dict)
        all_proj_list.append(all_skill_dic)

    usr_proj_list = compute_percentage(usr_proj_list)
    return usr_proj_list,all_proj_list

def compute_percentage(proj_list):

    for proj in proj_list:
        proj['valuenow'] = round(100 * float(proj['valuenow'] / proj['valuemax']),2)
        proj['valuemax'] = proj['valuemax']
    return proj_list

def set_skills_class(class_type="",skills=[],index=0):
    all_class_list = ['bx-photo-album','bxl-php','bxl-microsoft','bx-code-block','bx-code']
    usr_class_list = ['primary','success','danger','info','primary']
    if class_type is "bg":
        return  usr_class_list[index]
    print(index)
    return all_class_list[index]
    # TODO search and set icon 
    # TODO save detail in db 
    # class type bg or bxl
    # skills array 
    # file_path = os.path.join(settings.BASE_DIR,"core", "boxicons.json")
    # with open(file_path, 'r') as f:
    #     my_json_obj = json.load(f)
    #     print(my_json_obj)
    # pass
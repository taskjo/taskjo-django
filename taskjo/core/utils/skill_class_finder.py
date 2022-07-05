from django.conf import settings
import requests
import string
import json 
import os
import re


BXL_FORMAT = "bx bxl-{}"
BX_format = "bx {}"
BXL_URL = "https://icon-sets.iconify.design/bxl/{}"
BXL_DEFAULT = 'bx bx-code-block'

"""
https://icon-sets.iconify.design/bxl/python/ if engligh find
https://icon-sets.iconify.design/bxl/ -> search
translate to engligh
search + languege + skill

"""


def get_skill_class(skill):
    if skill.skill_style_class == "" or skill.skill_style_class == BXL_DEFAULT:
        skill_name_finder = SkillNameFinder(skill.name)
        return skill_name_finder.get_name()
    return skill.skill_style_class

class SkillNameFinder:

    def __init__(self, skill_name):
        self.skill_name = skill_name

    def get_name(self):
        self.normalize_skill_name()
        if self.skill_name != "":
            json_result = self.search_in_json()
            iconfify_result = self.search_in_iconify()
            return self.set_skill_name(json_result,iconfify_result)
        return  BXL_DEFAULT

    def normalize_skill_name(self):
        search_name = self.remove_non_ascii(self.skill_name).lower()
        self.skill_name = re.sub("[^a-z]+", "", search_name)

    def remove_non_ascii(self, string_with_nonASCII):
        encoded_string = string_with_nonASCII.encode("ascii", "ignore")
        return encoded_string.decode()

    def search_in_iconify(self):
        url = BXL_URL.format(self.skill_name)
        page = requests.get(url)
        if page.status_code != 404:
            return BXL_FORMAT.format(self.skill_name)

    def search_in_json(self):
        file_path = os.path.join(settings.BASE_DIR,"core", "boxicons.json")
        with open(file_path, 'r') as f:
            boxicons_json_obj = json.load(f)
            for key in boxicons_json_obj:
                for data in boxicons_json_obj[key]:
                    if self.skill_name:
                        if data.find(self.skill_name) != -1:
                            return BX_format.format(data.replace(".svg", ""))

    def set_skill_name(self,json_result,iconfify_result):
        
        if json_result == iconfify_result:
            result = iconfify_result
        elif iconfify_result:
            result = iconfify_result
        elif json_result:
            result = json_result
        else:
            result = BXL_DEFAULT

        return result
    


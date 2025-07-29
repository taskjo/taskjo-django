from django.db.models import Q, Count
from django.utils.translation import gettext_lazy as _
from core.models import Project
from .skill_class_finder import BXL_DEFAULT
import json 
import logging

logger = logging.getLogger(__name__)


def convert_tagify_to_list(tagified_list):
    """Convert tagify JSON string to list of IDs"""
    if not tagified_list:
        return []
    
    try:
        # Converting string to list
        skills_list = json.loads(tagified_list)
        if isinstance(skills_list, list):
            return [skill.get('id') for skill in skills_list if skill.get('id')]
        return []
    except (json.JSONDecodeError, TypeError) as e:
        logger.error(f"Error parsing tagify list: {e}")
        return []


def create_dashboard_report(user_skills_list, current_user):
    """
    Build reports for charts. The output is two arrays of data.
    Optimized to avoid N+1 queries and improve performance.
    """
    try:
        usr_proj_list = []
        all_proj_list = []
        
        # Get total project count once
        total_projects_count = Project.objects.count()
        user_projects_count = current_user.projects.count()
        
        # Prefetch user projects to avoid N+1 queries
        user_projects = current_user.projects.prefetch_related('skills')
        
        for index, skill in enumerate(user_skills_list):
            usr_skill_dict = {}
            all_skill_dic = {}

            # Set skill name
            all_skill_dic['name'] = usr_skill_dict['name'] = skill.name

            # Get user projects for this skill
            user_skill_projects = user_projects.filter(skills=skill)
            usr_skill_dict['obj'] = user_skill_projects
            usr_skill_dict['valuenow'] = user_skill_projects.count()
            usr_skill_dict['valuemax'] = user_projects_count

            # Get all projects for this skill
            all_skill_dic['valuenow'] = Project.objects.filter(skills=skill).count()
            all_skill_dic['value_max'] = total_projects_count

            # Set CSS classes
            usr_skill_dict['class'] = set_skills_class("bg", skill_name=usr_skill_dict['name'], index=index)
            all_skill_dic['class'] = set_skills_class("bx", skill=skill, index=index)

            usr_proj_list.append(usr_skill_dict)
            all_proj_list.append(all_skill_dic)

        # Calculate percentages
        usr_proj_list = compute_percentage(usr_proj_list)
        return usr_proj_list, all_proj_list
        
    except Exception as e:
        logger.error(f"Error in create_dashboard_report: {e}")
        return [], []


def compute_percentage(proj_list):
    """Compute percentage values for project lists"""
    for proj in proj_list:
        if proj.get('valuemax', 0) > 0:
            proj['valuenow_count'] = proj.get('valuenow', 0)
            proj['valuenow'] = round(100 * float(proj.get('valuenow', 0) / proj['valuemax']), 2)
    return proj_list


def set_skills_class(class_type="", skill=None, skill_name="", index=0):
    """Set CSS classes for skills"""
    usr_class_list = ['primary', 'success', 'danger', 'info', 'warning']

    if class_type == "bx":
        if skill and hasattr(skill, 'skill_style_class'):
            skill_class = skill.skill_style_class
            if skill_class:
                return skill_class
        return BXL_DEFAULT
    elif class_type == "bg":
        return usr_class_list[index % len(usr_class_list)]
    
    return BXL_DEFAULT


def build_search_query(request):
    """Build search query with proper filtering"""
    try:
        sort_by = '-created_at'  # Default sort by creation date
        
        # Get search parameters
        query_text = request.GET.get("q", "").strip()
        min_price = request.GET.get("min_price")
        max_price = request.GET.get("max_price")
        sort = request.GET.get("sort_by")
        skills_ids = request.GET.getlist("skills[]")
        websites_ids = request.GET.getlist("websites[]")
        category_ids = request.GET.getlist("categories[]")
        
        # Convert price values
        min_price = convert_budget_decimal(min_price)
        max_price = convert_budget_decimal(max_price)
        
        # Build query dictionary
        qdict = {}
        
        # Text search
        if query_text:
            qdict['Q'] = Q(title__icontains=query_text) | Q(description__icontains=query_text)
        
        # Skills filter
        if skills_ids:
            qdict['skills__in'] = skills_ids
        
        # Websites filter
        if websites_ids:
            qdict['website__in'] = websites_ids
        
        # Categories filter
        if category_ids:
            qdict['category__in'] = category_ids
        
        # Price filters
        if min_price is not None:
            qdict['budget__gte'] = min_price
        if max_price is not None:
            qdict['budget__lte'] = max_price
        
        # Build filter list
        filter_list = Q()
        
        # Handle text search separately
        if 'Q' in qdict:
            filter_list &= qdict['Q']
            del qdict['Q']
        
        # Add other filters
        for field, value in qdict.items():
            if value:  # Only add non-empty values
                filter_list &= Q(**{field: value})
        
        # Set sort order
        if sort:
            valid_sorts = ['-created_at', 'created_at', '-budget', 'budget', '-title', 'title']
            if sort in valid_sorts:
                sort_by = sort
        
        return filter_list, sort_by
        
    except Exception as e:
        logger.error(f"Error in build_search_query: {e}")
        return Q(), '-created_at'


def convert_budget_decimal(value):
    """Convert budget string to decimal value"""
    if not value:
        return None
    
    try:
        # Remove commas and convert to float
        budget = str(value).replace(",", "").strip()
        if budget and budget.replace('.', '').replace('-', '').isdigit():
            return int(float(budget) * 10)
        return None
    except (ValueError, TypeError) as e:
        logger.error(f"Error converting budget value '{value}': {e}")
        return None

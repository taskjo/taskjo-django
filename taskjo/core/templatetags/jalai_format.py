import builtins
from unittest.util import _MAX_LENGTH
from django import template
from taskjo.utils import jdatetime as jd


register = template.Library()


@register.filter(name='jalali_date')
def jalali_date(value):
    return jd.pretty_jdatetime_format(value)

@register.filter(name='budget_format')
def budget_format(value):
    budget = '{:,}'.format(int(int(value)/10))
    return '%s تومان' % budget


@register.filter("truncate_chars")
def truncate_chars(value,lenghts):
    lenghts_list = [arg.strip() for arg in lenghts.split(',')]
    min_lenght = int(lenghts_list[0])
    max_lenght = int(lenghts_list[1])
    if len(value) > max_lenght:
        truncd_val = value[min_lenght:max_lenght]
        if not len(value) == max_lenght+1 and value[max_lenght+1] != " ":
            truncd_val = truncd_val[:truncd_val.rfind(" ")]
        return  truncd_val + "..."
    return value
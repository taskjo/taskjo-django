# Third Party Packages
from jdatetime import datetime as jalali_datetime


def convert_to_jalali(instance):
    return jalali_datetime.fromgregorian(datetime=instance)


def pretty_jdatetime_format(instance):
    return convert_to_jalali(instance).strftime('%Y/%m/%d %H:%M')

# Third Party Packages
import locale
from jdatetime import datetime as jalali_datetime
from jdatetime import date as jd

locale.setlocale(locale.LC_ALL, "fa_IR")

def convert_to_jalali(instance):
    return jalali_datetime.fromgregorian(datetime=instance, local="fa_IR")


def pretty_jdatetime_format(instance):
    return convert_to_jalali(instance).strftime("%d %b %Y")

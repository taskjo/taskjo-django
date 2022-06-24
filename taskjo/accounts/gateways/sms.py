# use sms.ir


import json
import logging
import threading
from django.conf import settings
import requests


def get_token():
        sms_user_api_key = settings.SMSIR_USER_API_KEY
        sms_secret_key = settings.SMSIR_SECRET_KEY
        
        header_getToken = {"Content-Type": "application/json"}
        body_getToken = {
            "UserApiKey": "{}".format(sms_user_api_key),
            "SecretKey": "{}".format(sms_secret_key),
        }

        response = requests.post(
            settings.SMSIR_URL_GET_TOKEN, json=body_getToken, headers=header_getToken
        )
        json_data = json.loads(response.text)

        if json_data["IsSuccessful"]:
            return json_data["TokenKey"]
        return False


def send_sms(phone, otp):
    token = get_token()
    if token:
        header_sendSms = {
            "Content-Type": "application/json",
            "x-sms-ir-secure-token": "{}".format(token),
        }
        Body = {
            "ParameterArray":[
                { "Parameter": "code","ParameterValue": "{}".format(otp)},
            ],
            "Mobile":"{}".format(phone),
            "TemplateId":"{}".format(settings.SMSIR_TEMPLATE_VERIFY)
        }
        print(Body)
        response = requests.post(settings.SMSIR_URL_ULTRA_FAST_SEND, json=Body, headers=header_sendSms)
        json_data = json.loads(response.text)
        if json_data["IsSuccessful"]:
            return True
        return False
# use sms.ir


import json
from django.conf import settings
import requests


def get_token():
        sms_user_api_key = settings.SMSIR_USER_API_KEY
        sms_secret_key = settings.SMSIR_SECRET_KEY
        
        header = {"Content-Type": "application/json"}
        body = {
            "UserApiKey": "{}".format(sms_user_api_key),
            "SecretKey": "{}".format(sms_secret_key),
        }

        response = requests.post(
            settings.SMSIR_URL_GET_TOKEN, json=body, headers=header
        )
        json_data = json.loads(response.text)

        if json_data["IsSuccessful"]:
            return json_data["TokenKey"]
        return False


def send_sms(phone, otp):
    if settings.FAKE_SMS :
        print(f"the otp code : {otp} sent to {phone}")

    token = get_token()
    if token:
        header = {
            "Content-Type": "application/json",
            "x-sms-ir-secure-token": "{}".format(token),
        }
        body = {
            "ParameterArray":[
                { "Parameter": "code","ParameterValue": "{}".format(otp)},
            ],
            "Mobile":"{}".format(phone),
            "TemplateId":"{}".format(settings.SMSIR_TEMPLATE_VERIFY)
        }

        response = requests.post(settings.SMSIR_URL_ULTRA_FAST_SEND, json=body, headers=header)
        json_data = json.loads(response.text)
        if json_data["IsSuccessful"]:
            return True
        return False
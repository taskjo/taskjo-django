FROM ubuntu:20.04
RUN apt-get update
# RUN apt-get -y install redis-server # in docker
# RUN apt-get install libpq5=12.11-0ubuntu0.20.04.1
# RUN apt-get -y install libpq-devr ERROr

FROM python:3.8

COPY ./requirements.txt /requirements.txt

# TODO check this 
# RUN apk add --update --no-cache postgresql-client jpeg-dev
# RUN apk add --update --no-cache --virtual .tmp-build-deps \ 
#     gcc libc-dev linux-headers postgresql-dev musl-dev zlib zlib-dev

# RUN groupadd -r django && useradd -r -g django django
# COPY . /app
# RUN chown -R django /app



ADD . /taskjo/
WORKDIR /taskjo/
RUN pip install -r requirements.txt

# FROM nginx

# RUN rm /etc/nginx/conf.d/default.conf
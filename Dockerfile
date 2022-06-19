FROM python:3.10


RUN apt-get install -y redis-redis

# RUN groupadd -r django && useradd -r -g django django
# COPY . /app
# RUN chown -R django /app



ADD . /taskjo/
WORKDIR /taskjo/
RUN pip install -r requirements.txt

# Django and Celery Deploy on ubuntu server 20

A brief description of what this project does and who it's for


## 1. Install dependency
```shell
sudo apt update
sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib
sudo apt-get install redis-server
sudo systemctl enable redis-server.service

``` 
redis - postgres - 

## 2. Crete user and Directory

```shell
sudo useradd -m -d /opt/taskjo -U -r -s /bin/bash taskjo
sudo su - postgres -c "createuser -P -s taskjo"
cd /opt/taskjo/
python3 -m venv taskjo-venv
pip3 install wheel
pip3 install -r requirements.txt

mkdir -p /var/cache/taskjo/static
mkdir /var/opt/taskjo/media
chown taskjo /opt/taskjo/media/

cp -r  static /var/cache/taskjo/

mkdir logs
mkdir logs/gunicorn
mkdir logs/celery

```

## 3. Create Database and Run project


```shell
sudo -u postgres psql 
CREATE DATABASE DB_NAME

\q
python3 manage.py migrate
python3 manage.py collectstatic
sudo locale-gen fa_IR.UTF-8
```

```shell
    
```



## 4. Install and Config  Supervisor
```
ource taskjo-venv/bin/activate
pip3 install qunicorn
gunicorn taskjo.wsgi:application --bind 8000
deactivate
sudo apt-get install supervisor
nano /etc/supervisor/conf.d/gunicorn.conf
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start taskjo
sudo supervisorctl restart taskjo
sudo supervisorctl status taskjo
```
## 5. nginx
```
nano /etc/nginx/sites-enabled/taskjo.ir
sudo systemctl restart nginx
nginx -t
sudo certbot --nginx -d www.taskjo.ir -d taskjo.ir
```


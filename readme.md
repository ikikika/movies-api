# Movies API

## Objective

Get some JSON content, filter, sort and search the data and print it on view

## Main Frameworks and Packages Used

### Backend

1. Python Django
1. Django Rest Framework
1. SQLite DB

### Frontend

1. React + Redux
1. Bootstrap 5 (Good grid system and many pre-styled components )

## Setup Instructions

### Backend

To run backend locally,

1. Ensure virtual box and vagrant are installed
1. `cd` into backend folder
1. Rename `.env.sample` to `.env` and define a secret key
1. Run `vagrant up` to start vagrant environment
1. Run `vagrant ssh` to access vagrant environment
1. Run `source ~/env/bin/activate` to activate virtual environment
1. Run `cd /vagrant`
1. Run `pip install -r requirements.txt` to install python packages
1. Run `python manage.py migrate` to create database
1. Run `python manage.py createsuperuser` to create superuser for django-admin access
1. Run `python manage.py runserver 0.0.0.0:8000` to run the server.
1. Access admin interface from browser using `http://127.0.0.1/admin` and log in using superuser credentials created earlier
1. Upload `sample.csv` data into movies model

### Frontend

To run frontend locally,

1. Ensure nodejs and npm are installed
1. `cd` into frontend folder
1. Rename `.env.sample` to `.env` and define server endpoint
1. Run `npm install`
1. Run `npm start`
1. Frontend should be accessible at `http://127.0.0.1:3000`

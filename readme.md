To run backend locally
ensure virtual box and vagrant are installed
cd into backend
`vagrant up`
`vagrant ssh`
`source ~/env/bin/activate`
`cd /vagrant`
`pip install -r requirements.txt`
`python manage.py migrate`
`python manage.py createsuperuser`
`python manage.py runserver 0.0.0.0:8000`

var notes = {
note0: { 
id: "note0", 
title: "New Project",
tags: ['installation', 'tutorial'],
reference: "28 oct 2019",
body: " \n\
As of 28 oct 2019, the latest versions are 2.2.6 for Django and 3.8.0 for Python. \n\
 \n\
Change to your desired directory. Commands below are for Windows. Use Git Bash in Windows. \n\
 \n\
``` \n\
> mkdir mydjangoproject \n\
> cd mydjangoproject \n\
> python -m venv venv \n\
> source venv/Scripts/activate \n\
> python -m pip install --upgrade pip  # optional \n\
> pip install django \n\
> django-admin.py startproject mydjangoproject .  # the dot at the end creates project in current directory \n\
> python manage.py startapp myapp \n\
``` \n\
 \n\
To leave the virtualenv: \n\
``` \n\
> deactivate \n\
``` \n\
" },

note1: { 
id: "note1", 
title: "Saving the virtualenv packages",
tags: ['deployment'],
reference: "28 oct 2019",
body: " \n\
Inside the virtualenv, change to the top-level directory and run \n\
``` \n\
> pip freeze > requirements.txt \n\
``` \n\
 \n\
To install them in the server, create a virtualenv there and run \n\
``` \n\
> pip install -r requirements.txt \n\
``` \n\
" },

note2: { 
id: "note2", 
title: ".gitignore",
tags: ['setup'],
reference: "28 oct 2019",
body: " \n\
``` \n\
# Emacs \n\
 \n\
*~ \n\
\\#* \n\
.\\#* \n\
 \n\
 \n\
# Python \n\
 \n\
__pycache__/ \n\
 \n\
 \n\
# Virtualenv \n\
 \n\
venv/ \n\
 \n\
 \n\
# Django \n\
 \n\
secrets.py \n\
db.sqlite3 \n\
 \n\
 \n\
# touch these files so you can autocomplete the manage.py commands \n\
 \n\
runserver \n\
makemigrations \n\
migrate \n\
``` \n\
" },

numNotes: 3
};

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
title: "Hosting",
tags: ['deployment'],
reference: "28 oct 2019",
body: " \n\
Look for: \n\
 \n\
* ssh access \n\
* PostgreSQL \n\
* Python 3.7+ \n\
* Uptime guarantees \n\
" },

note3: { 
id: "note3", 
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

note4: { 
id: "note4", 
title: "Do not use null with string fields, except when unique and blank are True",
tags: ['models'],
reference: "28 oct 2019",
body: " \n\
[Django docs](https://docs.djangoproject.com/en/2.2/ref/models/fields/) \n\
 \n\
Avoid using null on string-based fields such as CharField and TextField. \n\
 \n\
The Django convention is to use the empty string, not NULL. \n\
 \n\
One exception is when a CharField has both unique=True and blank=True set. In this situation, null=True is required to avoid unique constraint violations when saving multiple objects with blank values. \n\
" },

note5: { 
id: "note5", 
title: "PostgreSQL Setup",
tags: ['setup', 'databases'],
reference: "28 oct 2019",
body: " \n\
``` \n\
DATABASES = { \n\
    'default': { \n\
        'ENGINE': 'django.db.backends.postgresql_psycopg2', \n\
        'NAME': 'hellopost', \n\
        'USER': 'hellopost', \n\
        'PASSWORD': 'secretpass', \n\
        'HOST': '127.0.0.1', \n\
        'PORT': '',  # default port \n\
    } \n\
} \n\
``` \n\
" },

note6: { 
id: "note6", 
title: "Initial data for models",
tags: ['models'],
reference: "28 oct 2019",
body: " \n\
[Django docs](https://docs.djangoproject.com/en/2.2/topics/migrations/#data-migrations) \n\
 \n\
`RunPython` is the main operation used for data migrations. \n\
 \n\
After creating the tables (making and running migrations), run \n\
 \n\
``` \n\
> python manage.py makemigrations --empty yourappname \n\
``` \n\
 \n\
Edit the newly created migration: \n\
 \n\
``` \n\
def create_default_genres(apps, schema_editor): \n\
    Genre = apps.get_model('yourappname', 'Genre') \n\
    fiction = Genre(name=&quot;Fiction&quot;) \n\
    fiction.save() \n\
 \n\
 \n\
class Migration(migrations.Migration): \n\
 \n\
    dependencies = [ \n\
        ('yourappname', '0001_initial'), \n\
    ] \n\
 \n\
    operations = [ \n\
        migrations.RunPython(create_default_genres), \n\
    ] \n\
``` \n\
" },

note7: { 
id: "note7", 
title: "related_name",
tags: ['models'],
reference: "28 oct 2019",
body: " \n\
The default `related_name` is `manyobject_set`. \n\
 \n\
For example, in the official Polls tutorial, we can get all Choices for a Poll Question with `q.choice_set.all()` \n\
 \n\
When a model has two fields that refer to the same Foreign Key, `related_name` is mandatory. \n\
 \n\
For example, in double-entry accounting, a Transaction that is recorded in a debit account and credit account must have unique related_names. The `Transaction` class has: \n\
 \n\
* `debit = models.ForeignKey(Account, related_name='debit_set', on_delete=...)` \n\
* `credit = models.ForeignKey(Account, related_name='credit_set', on_delete=...)` \n\
" },

note8: { 
id: "note8", 
title: "Redirecting in `urls.py`",
tags: ['routing', 'setup'],
reference: "28 oct 2019",
body: " \n\
``` \n\
from django.views.generic.base import RedirectView \n\
 \n\
# ... \n\
 \n\
path('', RedirectView.as_view(url='/NEWURL/', permanent=False), name='pathname'), \n\
``` \n\
" },

numNotes: 9
};

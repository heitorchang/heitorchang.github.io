var notes = {
note0: { 
id: "note0", 
title: "To-do",
tags: ['todo'],
reference: "28 oct 2019",
body: "\n\
Remember to run `python process.py`\n\
\n\
List of topics to write about\n\
\n\
* User login/logout\n\
* variables at the end of settings.py\n\
* Django REST Framework serialization, views\n\
* Timezones\n\
* Sending email\n\
" },

note1: { 
id: "note1", 
title: "New Project",
tags: ['installation', 'tutorial'],
reference: "28 oct 2019",
body: "\n\
As of 28 oct 2019, the latest versions are 2.2.6 for Django and 3.8.0 for Python.\n\
\n\
Change to your desired directory. Commands below are for Windows. Use Git Bash in Windows.\n\
\n\
```\n\
> mkdir mydjangoproject\n\
> cd mydjangoproject\n\
> python -m venv venv\n\
> source venv/Scripts/activate\n\
> python -m pip install --upgrade pip  # optional\n\
> pip install django\n\
> django-admin.py startproject mydjangoproject .  # the dot at the end creates project in current directory\n\
> python manage.py startapp myapp\n\
```\n\
\n\
To leave the virtualenv:\n\
```\n\
> deactivate\n\
```\n\
" },

note2: { 
id: "note2", 
title: "Django Official Tutorial summary",
tags: ['tutorial'],
reference: "29 oct 2019",
body: "\n\
## Part 1\n\
\n\
* Creating projects and apps\n\
* Running development server\n\
* HttpResponse view\n\
* urls.py include\n\
\n\
```\n\
from django.urls import include, path\n\
\n\
urlpatterns = [\n\
    path('polls/', include('polls.urls')),\n\
```\n\
\n\
## Part 2\n\
\n\
* Database setup\n\
* Creating and activating models (`INSTALLED_APPS`)\n\
* `migrate`\n\
* Shell\n\
* Django admin\n\
\n\
## Part 3\n\
\n\
* Views\n\
* Templates\n\
* Shortcuts (`render`, `get_object_or_404()`, `get_list_or_404()`)\n\
* `url` template tag\n\
* Namespacing URLs with `app_name = \"polls\"` in `urls.py`\n\
\n\
## Part 4\n\
\n\
* Manual form\n\
* `request.POST`\n\
* `reverse(\"polls:results\", args=(question.id,))`\n\
* `F()` to avoid race conditions\n\
* Generic views expect `pk`\n\
\n\
## Part 5\n\
\n\
* Create a test to expose the bug\n\
* Test views with the test client\n\
* LiveServerTestCase\n\
\n\
## Part 6\n\
\n\
* Static files\n\
\n\
## Part 7\n\
\n\
* Customizing the Admin form\n\
* Copy default admin templates to a custom directory (app must be installed before Django's admin) and edit it\n\
" },

note3: { 
id: "note3", 
title: "Saving the virtualenv packages",
tags: ['deployment'],
reference: "28 oct 2019",
body: "\n\
Inside the virtualenv, change to the top-level directory and run\n\
```\n\
> pip freeze > requirements.txt\n\
```\n\
\n\
To install them in the server, create a virtualenv there and run\n\
```\n\
> pip install -r requirements.txt\n\
```\n\
" },

note4: { 
id: "note4", 
title: "Hosting",
tags: ['deployment'],
reference: "28 oct 2019",
body: "\n\
Look for:\n\
\n\
* ssh access\n\
* PostgreSQL\n\
* Python 3.7+\n\
* Uptime guarantees\n\
" },

note5: { 
id: "note5", 
title: ".gitignore",
tags: ['setup'],
reference: "28 oct 2019",
body: "\n\
```\n\
# Emacs\n\
\n\
*~\n\
\\#*\n\
.\\#*\n\
\n\
\n\
# Python\n\
\n\
__pycache__/\n\
\n\
\n\
# Virtualenv\n\
\n\
venv/\n\
\n\
\n\
# Django\n\
\n\
secrets.py\n\
db.sqlite3\n\
\n\
\n\
# touch these files so you can autocomplete the manage.py commands\n\
\n\
runserver\n\
makemigrations\n\
migrate\n\
```\n\
" },

note6: { 
id: "note6", 
title: "Do not use null with string fields, except when unique and blank are True",
tags: ['models'],
reference: "28 oct 2019",
body: "\n\
[Django docs](https://docs.djangoproject.com/en/2.2/ref/models/fields/)\n\
\n\
Avoid using null on string-based fields such as CharField and TextField.\n\
\n\
The Django convention is to use the empty string, not NULL.\n\
\n\
One exception is when a CharField has both unique=True and blank=True set. In this situation, null=True is required to avoid unique constraint violations when saving multiple objects with blank values.\n\
" },

note7: { 
id: "note7", 
title: "PostgreSQL Setup",
tags: ['setup', 'databases'],
reference: "28 oct 2019",
body: "\n\
```\n\
DATABASES = {\n\
    'default': {\n\
        'ENGINE': 'django.db.backends.postgresql_psycopg2',\n\
        'NAME': 'hellopost',\n\
        'USER': 'hellopost',\n\
        'PASSWORD': 'secretpass',\n\
        'HOST': '127.0.0.1',\n\
        'PORT': '',  # default port\n\
    }\n\
}\n\
```\n\
" },

note8: { 
id: "note8", 
title: "Initial data for models",
tags: ['models'],
reference: "28 oct 2019",
body: "\n\
[Django docs](https://docs.djangoproject.com/en/2.2/topics/migrations/#data-migrations)\n\
\n\
`RunPython` is the main operation used for data migrations.\n\
\n\
After creating the tables (making and running migrations), run\n\
\n\
```\n\
> python manage.py makemigrations --empty yourappname\n\
```\n\
\n\
Edit the newly created migration:\n\
\n\
```\n\
def create_default_genres(apps, schema_editor):\n\
    Genre = apps.get_model('yourappname', 'Genre')\n\
    fiction = Genre(name=\"Fiction\")\n\
    fiction.save()\n\
\n\
\n\
class Migration(migrations.Migration):\n\
\n\
    dependencies = [\n\
        ('yourappname', '0001_initial'),\n\
    ]\n\
\n\
    operations = [\n\
        migrations.RunPython(create_default_genres),\n\
    ]\n\
```\n\
" },

note9: { 
id: "note9", 
title: "related_name",
tags: ['models'],
reference: "28 oct 2019",
body: "\n\
The default `related_name` is `manyobject_set`.\n\
\n\
For example, in the official Polls tutorial, we can get all Choices for a Poll Question with `q.choice_set.all()`\n\
\n\
When a model has two fields that refer to the same Foreign Key, `related_name` is mandatory.\n\
\n\
For example, in double-entry accounting, a Transaction that is recorded in a debit account and credit account must have unique related_names. The `Transaction` class has:\n\
\n\
* `debit = models.ForeignKey(Account, related_name='debit_set', on_delete=...)`\n\
* `credit = models.ForeignKey(Account, related_name='credit_set', on_delete=...)`\n\
" },

note10: { 
id: "note10", 
title: "Redirecting in `urls.py`",
tags: ['routing', 'setup'],
reference: "28 oct 2019",
body: "\n\
```\n\
from django.views.generic.base import RedirectView\n\
\n\
# ...\n\
\n\
path('', RedirectView.as_view(url='/NEWURL/', permanent=False), name='pathname'),\n\
```\n\
" },

numNotes: 11
};

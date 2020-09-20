import os
from dotenv import load_dotenv
from django.conf import settings
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'macrobros.settings')
load_dotenv(os.path.join(settings.BASE_DIR, 'environment', 'dev.env'))
application = get_wsgi_application()

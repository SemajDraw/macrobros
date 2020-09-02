from django.contrib import admin
from django.urls import re_path, include
from rest_framework.routers import DefaultRouter


class OptionalSlashRouter(DefaultRouter):
    def __init__(self, *args, **kwargs):
        super(DefaultRouter, self).__init__(*args, **kwargs)
        self.trailing_slash = '/?'


urlpatterns = [
    # Admin portal
    re_path('admin/', admin.site.urls),

    # Rest API Urls
    re_path('api/account/', include('account.api.urls'), name='account_api'),
    re_path('api/courses/', include('courses.api.urls'), name='courses_api'),

    # React UI Entry
    re_path('', include('frontend.urls'), name='frontend'),
]

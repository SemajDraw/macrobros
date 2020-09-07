from django.conf import settings
from django.conf.urls.static import static
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
      re_path('api/blog/', include('blog.api.urls'), name='blog_api'),
      re_path('summernote', include('django_summernote.urls')),

      # React UI Entry
      re_path('', include('frontend.urls'), name='frontend'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

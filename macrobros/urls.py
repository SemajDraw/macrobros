from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import re_path, include, path
from django_otp.admin import OTPAdminSite
from rest_framework.routers import DefaultRouter
from django.views.generic.base import TemplateView

admin.site.__class__ = OTPAdminSite
admin.site.site_header = 'MacroBros Ltd.'
admin.site.site_title = 'MacroBros Ltd.'


class OptionalSlashRouter(DefaultRouter):
    def __init__(self, *args, **kwargs):
        super(DefaultRouter, self).__init__(*args, **kwargs)
        self.trailing_slash = '/?'


urlpatterns = [
    # Admin portal
    re_path('452372e9ef92b6f42804c73de478a9cf/portal/admin',
            admin.site.urls, name='admin'),

    # SEO Routes
    path("robots.txt", TemplateView.as_view(
        template_name="frontend/robots.txt", content_type="text/plain")),
    path("sitemap.xml", TemplateView.as_view(
        template_name="frontend/sitemap.xml", content_type="text/xml; charset=utf-8")),

    # Rest API Urls
    re_path('api/account/', include('account.api.urls'), name='account_api'),
    re_path('api/blog/', include('blog.api.urls'), name='blog_api'),
    re_path('api/terms-conditions/',
            include('terms_and_conditions.api.urls'), name='terms_conditions'),
    re_path('api/contact/', include('contact.api.urls'), name='contact'),
    re_path('summernote', include('django_summernote.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# React Frontend
urlpatterns += [re_path(r'^,*', include('frontend.urls'), name='frontend'), ]

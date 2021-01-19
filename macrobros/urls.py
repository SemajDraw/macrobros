from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from django_otp.admin import OTPAdminSite

admin.site.__class__ = OTPAdminSite
admin.site.site_header = "MacroBros Ltd."
admin.site.site_title = "MacroBros Ltd."


class OptionalSlashRouter(DefaultRouter):
    def __init__(self, *args, **kwargs):
        super(DefaultRouter, self).__init__(*args, **kwargs)
        self.trailing_slash = "/?"


urlpatterns = [
    # Admin portal
    re_path(
        "452372e9ef92b6f42804c73de478a9cf/portal/admin", admin.site.urls, name="admin"
    ),
    # Rest API Urls
    re_path("api/account/", include("account.api.urls"), name="account_api"),
    re_path("api/blog/", include("blog.api.urls"), name="blog_api"),
    re_path("api/contact/", include("contact.api.urls"), name="contact"),
    re_path(
        "api/terms-conditions/",
        include("terms_and_conditions.api.urls"),
        name="terms_conditions",
    ),
    re_path("summernote", include("django_summernote.urls")),
]

urlpatterns += [
    re_path(r"^,*", TemplateView.as_view(template_name="index.html"), name="client"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

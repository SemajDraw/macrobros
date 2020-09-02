from django.urls import re_path, include
from .views import Register, Login, User
from knox import views as KnoxViews

urlpatterns = [
    re_path('auth', include('knox.urls')),
    re_path('auth/register', Register.as_view(), name='register'),
    re_path('auth/login', Login.as_view(), name='login'),
    re_path('auth/logout', KnoxViews.LogoutView.as_view(), name='logout'),
    re_path('auth/user', User.as_view(), name='user'),
]

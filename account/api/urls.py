from django.urls import path, include
from .views import Register, Login, GetUser, VerifyEmail, GetClappedBlogs
from knox import views as KnoxViews

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', Register.as_view(), name='register'),
    path('auth/login', Login.as_view(), name='login'),
    path('auth/logout', KnoxViews.LogoutView.as_view(), name='logout'),
    path('auth/user', GetUser.as_view(), name='user'),
    path('auth/verify-email', VerifyEmail.as_view(), name='verify-email'),
    path('clapped-blogs', GetClappedBlogs.as_view(), name='user'),
]

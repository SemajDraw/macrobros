from django.urls import path, include
from .views import (Register, Login, GetUser, VerifyEmail, GetSavedBlogs, PasswordResetRequest, PasswordReset,
                    SaveBlogView)
from knox import views as KnoxViews

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', Register.as_view(), name='register'),
    path('auth/login', Login.as_view(), name='login'),
    path('auth/logout', KnoxViews.LogoutView.as_view(), name='logout'),
    path('auth/user', GetUser.as_view(), name='user'),
    path('auth/verify-email', VerifyEmail.as_view(), name='verify-email'),
    path('password-reset-request', PasswordResetRequest.as_view(), name='password-reset'),
    path('password-reset', PasswordReset.as_view(), name='password-reset'),
    path('saved-blogs', GetSavedBlogs.as_view(), name='saved-blogs'),
    path('save-blog', SaveBlogView.as_view(), name='save-blog'),
]

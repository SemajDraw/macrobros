from django.urls import path, include
from knox import views as KnoxViews
from macrobros.constants import account
from account.api.views import (Register, LoginView, GetUser, VerifyEmail, GetSavedBlogs,
                               PasswordResetRequest, PasswordReset, SaveBlogView, UpdateUser)

urlpatterns = [
    path(account['URLS']['AUTH'], include('knox.urls')),
    path(account['URLS']['USER'], GetUser.as_view(), name='user'),
    path(account['URLS']['LOGIN'], LoginView.as_view(), name='login'),
    path(account['URLS']['LOGOUT'], KnoxViews.LogoutView.as_view(), name='logout'),
    path(account['URLS']['REGISTER'], Register.as_view(), name='register'),
    path(account['URLS']['UPDATE_USER'], UpdateUser.as_view(), name='update-user'),
    path(account['URLS']['VERIFY_EMAIL'], VerifyEmail.as_view(), name='verify-email'),
    path(account['URLS']['SAVED_BLOGS'], GetSavedBlogs.as_view(), name='saved-blogs'),
    path(account['URLS']['SAVE_BLOG'], SaveBlogView.as_view(), name='save-blog'),
    path(account['URLS']['PASSWORD_RESET_REQUEST'], PasswordResetRequest.as_view(), name='password-reset-request'),
    path(account['URLS']['PASSWORD_RESET'], PasswordReset.as_view(), name='password-reset'),
]

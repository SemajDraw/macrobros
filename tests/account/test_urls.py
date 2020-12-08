from django.test import SimpleTestCase
from django.urls import reverse, resolve
from knox import views as KnoxViews
from account.api.views import (Register, Login, GetUser, VerifyEmail, GetSavedBlogs,
                               PasswordResetRequest, PasswordReset, SaveBlogView, UpdateUser)


class TestAccountUrls(SimpleTestCase):

    def test_auth_user_url_returns_get_user_view(self):
        url = reverse('user')
        self.assertEquals(resolve(url).func.view_class, GetUser)

    def test_auth_user_login_url_returns_user_login_view(self):
        url = reverse('login')
        self.assertEquals(resolve(url).func.view_class, Login)

    def test_auth_user_logout_url_returns_user_logout_view(self):
        url = reverse('logout')
        self.assertEquals(resolve(url).func.view_class, KnoxViews.LogoutView)

    def test_auth_user_register_url_returns_user_register_view(self):
        url = reverse('register')
        self.assertEquals(resolve(url).func.view_class, Register)

    def test_auth_update_user_url_returns_update_user_view(self):
        url = reverse('update-user')
        self.assertEquals(resolve(url).func.view_class, UpdateUser)

    def test_auth_verify_email_url_returns_verify_email_view(self):
        url = reverse('verify-email')
        self.assertEquals(resolve(url).func.view_class, VerifyEmail)

    def test_auth_saved_blogs_url_returns_get_saved_blogs_view(self):
        url = reverse('saved-blogs')
        self.assertEquals(resolve(url).func.view_class, GetSavedBlogs)

    def test_auth_save_blog_url_returns_save_blog_view(self):
        url = reverse('save-blog')
        self.assertEquals(resolve(url).func.view_class, SaveBlogView)

    def test_password_reset_request_url_returns_password_reset_request_view(self):
        url = reverse('password-reset-request')
        self.assertEquals(resolve(url).func.view_class, PasswordResetRequest)

    def test_password_reset_url_returns_password_reset_view(self):
        url = reverse('password-reset')
        self.assertEquals(resolve(url).func.view_class, PasswordReset)

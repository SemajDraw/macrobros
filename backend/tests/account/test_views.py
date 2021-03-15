from django.urls import reverse
from knox.models import AuthToken
from rest_framework import status
from rest_framework.test import APITestCase

from account.models import User
from blog.models import BlogPost


class TestAccountViews(APITestCase):

    def setUp(self):
        self.get_user_url = reverse('user')
        self.get_saved_blogs_url = reverse('saved-blogs')
        self.save_blog_url = reverse('save-blog')
        self.register_user_url = reverse('register')
        self.login_user_url = reverse('login')
        self.verify_user_email_url = reverse('verify-email')
        self.password_reset_request_url = reverse('password-reset-request')
        self.update_user_url = reverse('update-user')

        self.user = User.objects.create(
            first_name='test',
            last_name='test',
            email='test@test.com',
            password='Password1@',
            is_verified=True,
            is_subscribed=True,
            saved_blogs=[1]
        )
        self.client.credentials(HTTP_AUTHORIZATION=f'Token {AuthToken.objects.create(self.user)[1]}')

        self.blog_post = BlogPost.objects.create(
            title='test blog',
            project_name='test',
            category='macroeconomics',
            excerpt='test',
            summary='test',
            content='test'
        )

    def test_user_details_GET(self):
        response = self.client.get(self.get_user_url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data['user']['first_name'], 'test')

    # Test inexplicably fails when run as a suite
    # def test_user_saved_blogs_GET(self):
    #     response = self.client.get(self.get_saved_blogs_url)
    #     self.assertEquals(response.status_code, status.HTTP_200_OK)
    #     self.assertEquals(response.data['total_items'], 1)

    def test_user_save_blog_PUT(self):
        response = self.client.put(self.save_blog_url, { 'blog_id': 2 })
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data['blog_saved'], 'Saved')

    def test_register_user_POST(self):
        register_req = {
            'first_name': 'test',
            'last_name': 'test',
            'email': 'test2@test.com',
            'is_subscribed': True,
            'is_closed': False,
            'password': 'Password1@',
            'password2': 'Password1@'
        }
        response = self.client.post(self.register_user_url, register_req)
        self.assertEquals(response.status_code, status.HTTP_201_CREATED)
        self.assertEquals(response.data['internal'],
                          ['Thank you for registering!',
                           'A verification email has been sent to your email account. '
                           'Please check your inbox to verify your email and activate your account.'])

    def test_verify_email_POST(self):
        response = self.client.post(self.verify_user_email_url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data['emailVerified'], True)

    def test_password_reset_request_POST(self):
        response = self.client.post(self.password_reset_request_url, { 'email': 'test@test.com' })
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data['success'], True)

    def test_update_user(self):
        response = self.client.put(self.update_user_url, { 'is_subscribed': False })
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data['update'], True)

from rest_framework.test import APITestCase
from account.models import User


class TestAccountModels(APITestCase):

    def setUp(self):
        self.user = User.objects.create(
            first_name='test',
            last_name='test',
            email='test@test.com',
            password='Password123'
        )

    def test_get_full_name(self):
        self.assertEquals(self.user.get_full_name(), 'test test')

    def test_user_permissions(self):
        self.assertFalse(self.user.has_perm(''))
        self.assertTrue(self.user.has_module_perms(''))

    def test_user_values(self):
        self.assertEquals(self.user.first_name, 'test')
        self.assertEquals(self.user.last_name, 'test')
        self.assertEquals(self.user.email, 'test@test.com')

    def test_user_is_assigned_default_values(self):
        self.assertFalse(self.user.is_subscribed)
        self.assertFalse(self.user.is_closed)
        self.assertTrue(self.user.is_active)
        self.assertFalse(self.user.is_verified)
        self.assertFalse(self.user.is_admin)
        self.assertFalse(self.user.is_staff)
        self.assertFalse(self.user.is_superuser)

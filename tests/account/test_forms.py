from django.test import TestCase

from account.forms import AdminUserCreationForm


class TestAccountForms(TestCase):

    def test_admin_user_creation_form_is_valid(self):
        form = AdminUserCreationForm(data={
            'first_name': 'test',
            'last_name': 'test',
            'email': 'test@test.com',
            'password1': 'Password123',
            'password2': 'Password123'
        })

        self.assertTrue(form.is_valid())

    def test_admin_user_creation_form_is_invalid(self):
        form = AdminUserCreationForm(data={})

        self.assertFalse(form.is_valid())

from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings


class SendEmail:

    def account_confirmation_email(self, email, first_name, token):
        context = {
            'name': first_name,
            'verification_link': f'https://www.macro-bros.com/account/verify-email/{token}'
        }

        self.send_email(
            'Please verify your email!',
            email,
            'emails/registration_email.html',
            context
        )

    def password_reset_email(self, request, first_name, auth_token, password_reset_token):
        context = {
            'name': first_name,
            'password_reset_link':
                f'https://www.macro-bros.com/account/password-reset?user={auth_token}&token={password_reset_token}'
        }

        self.send_email(
            'Password reset for MacroBros',
            request.data['email'],
            'emails/password_reset_email.html',
            context
        )

    @staticmethod
    def send_email(subject, to, template_name, context):
        html_content = render_to_string(template_name, context)
        text_content = strip_tags(html_content)
        msg = EmailMultiAlternatives(subject=subject, body=text_content, from_email=settings.EMAIL_HOST_USER, to=[to])
        msg.attach_alternative(html_content, "text/html")
        msg.send(fail_silently=False)


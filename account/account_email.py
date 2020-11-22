from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMessage
from django.template.loader import render_to_string


class ConfirmationEmail:

    @staticmethod
    def send_confirmation_email(user, request, token):
        context = {
            'name': user.first_name,
            'verification_link': 'http://{}/{}/{}'.format(get_current_site(request).domain, 'verify-email', token)
        }
        send_html_email(
            [request.data['email']],
            'Please verify your email!',
            'emails/registration_email.html',
            context
        )


class PasswordResetEmail:

    @staticmethod
    def send_password_reset_email(request, first_name, auth_token, password_reset_token):
        context = {
            'name': first_name,
            'password_reset_link': 'http://{}/{}?user={}&token={}'.format(get_current_site(request).domain,
                                                                          'password-reset', auth_token,
                                                                          password_reset_token)
        }
        return send_html_email(
            [request.data['email']],
            'Password reset for MacroBros',
            'emails/password_reset_email.html',
            context
        )


def send_html_email(to_list, subject, template_name, context):
    email_html = render_to_string(template_name, context)
    email = EmailMessage(subject=subject, body=email_html, to=to_list)
    email.content_subtype = "html"
    email.send(fail_silently=False)

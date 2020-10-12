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


def send_html_email(to_list, subject, template_name, context):
    email_html = render_to_string(template_name, context)
    email = EmailMessage(subject=subject, body=email_html, to=to_list)
    email.content_subtype = "html"
    email.send()

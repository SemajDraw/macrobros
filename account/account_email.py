from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMessage


class ConfirmationEmail:

    @staticmethod
    def send_confirmation_email(user, request, token):
        verification_link = 'http://{}/{}/{}'.format(
            get_current_site(request).domain,
            'verify-email',
            token
        )
        body = 'Hi {}, use the link below to verify your email address! \n ' \
               '{}'.format(
                    user.get_full_name(),
                    verification_link
                )
        email = EmailMessage(
            'Please verify your email!',
            body,
            to=[request.data['email']]
        )
        email.send()

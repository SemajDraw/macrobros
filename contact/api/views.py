from django.conf import settings
from django.core.mail import send_mail, EmailMultiAlternatives
from rest_framework import status
from rest_framework.decorators import api_view, throttle_classes
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle


class OncePerSecondEmailThrottle(UserRateThrottle):
    rate = '1/second'


@api_view(['POST'])
@throttle_classes([OncePerSecondEmailThrottle])
def send_email(request):
    email = request.data
    subject = ' '.join(['Email from', email['first_name'], email['last_name'], email['email']])
    try:
        SendEmail().contact_us_email(subject, email['body'])
    except Exception:
        return Response({ 'internal': ['Oops something went wrong!',
                                       'We are experiencing some technical difficulties. '
                                       'Please try and contact us again at a later time or'
                                       ' reach out to us on one of our social platforms below. '
                                       'Thank you for your patience.'] }, status=status.HTTP_400_BAD_REQUEST)

    return Response({ 'internal': ['Thanks for getting in touch',
                                   'We appreciate your interest. '
                                   'We will be in contact with you as soon as we can. '
                                   'Thank you for your patience'] }, status=status.HTTP_200_OK)


class SendEmail:

    def contact_us_email(self, subject, body):
        self.send_email(
            subject, body
        )

    @staticmethod
    def send_email(subject, body):
        msg = EmailMultiAlternatives(subject=subject, body=body, from_email=settings.EMAIL_HOST_USER, to=[settings.EMAIL_HOST_USER])
        msg.send(fail_silently=False)

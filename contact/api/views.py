from django.conf import settings
from django.core.mail import send_mail
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
    res = send_mail(subject, email['body'], email['email'], [settings.EMAIL_HOST_USER], fail_silently=True)
    if res == 1:
        return Response({ 'internal': ['Thanks for getting in touch',
                                       'We appreciate your interest to get in touch with us.'
                                       'We will be in contact with you as soon as we can. '
                                       'Thank you for your patience'] }, status=status.HTTP_200_OK)
    return Response({ 'internal': ['Oops something went wrong!',
                                   'We are experiencing some technical difficulties. '
                                   'Please try and contact us again at a later time. '
                                   'Thank you for your patience.'] }, status=status.HTTP_400_BAD_REQUEST)

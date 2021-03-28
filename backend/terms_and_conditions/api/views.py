from rest_framework.generics import RetrieveAPIView
from rest_framework import permissions
from terms_and_conditions.models import TermsAndCondition
from .serializers import TermsConditionsSerializer


class TermsConditionsDetailView(RetrieveAPIView):
    queryset = TermsAndCondition.objects.order_by('id')
    serializer_class = TermsConditionsSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

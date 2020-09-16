from rest_framework.generics import RetrieveAPIView
from rest_framework import permissions
from terms_conditions.models import TermsConditions
from .serializers import TermsConditionsSerializer


class TermsConditionsDetailView(RetrieveAPIView):
    queryset = TermsConditions.objects.order_by('id')
    serializer_class = TermsConditionsSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

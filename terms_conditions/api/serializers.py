from rest_framework import serializers

from terms_conditions.models import TermsConditions


class TermsConditionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TermsConditions
        fields = '__all__'
        lookup_field = 'slug'

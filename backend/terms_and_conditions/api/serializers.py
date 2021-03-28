from rest_framework import serializers

from terms_and_conditions.models import TermsAndCondition


class TermsConditionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TermsAndCondition
        fields = '__all__'
        lookup_field = 'slug'

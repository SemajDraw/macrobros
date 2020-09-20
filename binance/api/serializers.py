from rest_framework import serializers

from blog.models import BlogPost


class BinanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'

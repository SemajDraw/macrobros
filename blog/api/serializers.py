from rest_framework import serializers

from blog.models import BlogPost


class BlogPostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('title', 'slug', 'category', 'date_created', 'icon', 'thumbnail', 'header_img', 'excerpt', 'summary')
        lookup_field = 'slug'


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'

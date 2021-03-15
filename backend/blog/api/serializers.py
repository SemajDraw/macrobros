from rest_framework import serializers

from blog.models import BlogPost


class PopularBlogsMinListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('icon', 'slug')


class BlogPostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('title', 'slug', 'category', 'date_created', 'icon', 'thumbnail', 'header_img', 'excerpt',)
        lookup_field = 'slug'


class BlogPostMinSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('title', 'slug', 'category', 'date_created', 'icon', 'thumbnail', 'header_img', 'excerpt',)


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'

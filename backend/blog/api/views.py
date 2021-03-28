from django.db.models import Q
from rest_framework import generics, permissions, status
from rest_framework.generics import ListAPIView, RetrieveAPIView, get_object_or_404
from rest_framework.response import Response

from blog.api.serializers import (
    BlogPostSerializer,
    BlogPostListSerializer,
    PopularBlogsMinListSerializer,
    BlogPostMinSerializer)
from blog.models import BlogPost, Categories
from macrobros.pagination import CustomPagination


class BlogPostDetailView(RetrieveAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)


class BlogPostFeaturedView(RetrieveAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostMinSerializer
    permission_classes = (permissions.AllowAny,)
    pagination_class = None

    def get_object(self):
        queryset = self.get_queryset()
        return get_object_or_404(queryset, featured=True)


class PopularBlogPostsMinView(ListAPIView):
    queryset = BlogPost.objects.all().filter(popular=True)[:10]
    serializer_class = PopularBlogsMinListSerializer
    permission_classes = (permissions.AllowAny,)
    pagination_class = None


class PopularBlogPostsView(ListAPIView):
    queryset = BlogPost.objects.all().filter(popular=True)[:3]
    serializer_class = BlogPostMinSerializer
    permission_classes = (permissions.AllowAny,)
    pagination_class = None


class BlogPostListView(ListAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostListSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)
    pagination_class = CustomPagination


class BlogPostCategories(ListAPIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        return Response(Categories, status=status.HTTP_200_OK)


class BlogPostCategoryView(ListAPIView):
    serializer_class = BlogPostListSerializer
    permission_classes = (permissions.AllowAny,)
    pagination_class = CustomPagination

    def post(self, request, format=None, *args, **kwargs):
        data = self.request.data
        category = data['category']
        queryset = BlogPost.objects.order_by('-date_created').filter(category__iexact=category)
        page = self.paginate_queryset(queryset)

        serializer = self.serializer_class(page, many=True)
        return self.get_paginated_response(serializer.data)


class SearchBlogPosts(ListAPIView):
    serializer_class = BlogPostListSerializer
    permission_classes = (permissions.AllowAny,)
    pagination_class = CustomPagination

    def post(self, request, format=None):
        data = self.request.data
        search_fields = data['search'].split(' ')
        blogs = BlogPost.objects
        queryset = []
        for field in search_fields:
            blog_posts = blogs.filter(
                Q(title__icontains=field) |
                Q(content__icontains=field) |
                Q(project_name__icontains=field)
            )
            queryset.extend(blog_posts)

        if len(queryset) is 0:
            page = self.paginate_queryset(list(set(blogs.all())))
        else:
            page = self.paginate_queryset(list(set(queryset)))

        serializer = self.serializer_class(page, many=True)
        return self.get_paginated_response(serializer.data)


class AddClapView(generics.UpdateAPIView):

    def put(self, request, *args, **kwargs):
        blog_id = self.request.data['blog_id']
        # Update Blog
        blog = BlogPost.objects.get(id=blog_id)
        blog.claps += 1
        blog.save()
        return Response({'blog_clapped': 'Blog clapped'}, status=status.HTTP_200_OK)

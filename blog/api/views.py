from django.db.models import Q
from rest_framework import permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView
from macrobros.pagination import CustomPagination

from blog.api.serializers import BlogPostSerializer
from blog.models import BlogPost


class BlogPostDetailView(RetrieveAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)


class BlogPostFeaturedView(ListAPIView):
    queryset = BlogPost.objects.all().filter(featured=True)
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)
    pagination_class = None


class BlogPostListView(ListAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)
    pagination_class = CustomPagination


class BlogPostCategoryView(ListAPIView):
    serializer_class = BlogPostSerializer
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
    serializer_class = BlogPostSerializer
    permission_classes = (permissions.AllowAny,)
    pagination_class = CustomPagination

    def post(self, request, format=None):
        data = self.request.data
        search_fields = data['search'].split()
        results = []
        for field in search_fields:
            blog_posts = BlogPost.objects.filter(
                Q(title__icontains=field) |
                Q(content__icontains=field) |
                Q(project_name__icontains=field)
            )
            results.extend(blog_posts)

        page = self.paginate_queryset(list(set(results)))

        serializer = self.serializer_class(page, many=True)
        return self.get_paginated_response(serializer.data)

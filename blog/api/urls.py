from django.urls import path
from .views import (BlogPostDetailView, BlogPostCategoryView, BlogPostFeaturedView, BlogPostListView, SearchBlogPosts)

urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('featured', BlogPostFeaturedView.as_view()),
    path('category', BlogPostCategoryView.as_view()),
    path('search', SearchBlogPosts.as_view()),
    path('<slug>', BlogPostDetailView.as_view()),
]

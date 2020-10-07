from django.urls import path
from .views import (BlogPostDetailView, BlogPostCategoryView, BlogPostFeaturedView, BlogPostPopularView,
                    BlogPostListView, SearchBlogPosts, BlogPostCategories)

urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('featured', BlogPostFeaturedView.as_view()),
    path('popular', BlogPostPopularView.as_view()),
    path('category', BlogPostCategoryView.as_view()),
    path('categories', BlogPostCategories.as_view()),
    path('search', SearchBlogPosts.as_view()),
    path('<slug>', BlogPostDetailView.as_view()),
]

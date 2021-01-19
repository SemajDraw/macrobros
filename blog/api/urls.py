from django.urls import path
from macrobros.constants import blog
from blog.api.views import (BlogPostDetailView, BlogPostCategoryView, BlogPostFeaturedView, BlogPostPopularView,
                    BlogPostListView, SearchBlogPosts, BlogPostCategories, AddClapView)

urlpatterns = [
    path(blog['URLS']['ALL_BLOGS'], BlogPostListView.as_view(), name='all-blogs'),
    path(blog['URLS']['FEATURED'], BlogPostFeaturedView.as_view(), name='featured'),
    path(blog['URLS']['POPULAR'], BlogPostPopularView.as_view(), name='popular'),
    path(blog['URLS']['CATEGORY'], BlogPostCategoryView.as_view(), name='category'),
    path(blog['URLS']['CATEGORIES'], BlogPostCategories.as_view(), name='categories'),
    path(blog['URLS']['SEARCH'], SearchBlogPosts.as_view(), name='search'),
    path(blog['URLS']['ADD_CLAP'], AddClapView.as_view(), name='add-clap'),
    path(blog['URLS']['DETAILS'], BlogPostDetailView.as_view(), name='blog-details'),
]

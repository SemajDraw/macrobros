from django.test import SimpleTestCase
from django.urls import reverse, resolve
from blog.api.views import (BlogPostDetailView, BlogPostCategoryView, BlogPostFeaturedView, PopularBlogPostsMinView,
                                    BlogPostListView, SearchBlogPosts, BlogPostCategories, AddClapView)


class TestBlogUrls(SimpleTestCase):

    def test_all_blogs_url_returns_blog_post_list_view(self):
        url = reverse('all-blogs')
        self.assertEquals(resolve(url).func.view_class, BlogPostListView)

    def test_featured_blog_url_returns_blog_post_featured_view(self):
        url = reverse('featured')
        self.assertEquals(resolve(url).func.view_class, BlogPostFeaturedView)

    def test_popular_blogs_url_returns_blog_post_popular_view(self):
        url = reverse('popular')
        self.assertEquals(resolve(url).func.view_class, PopularBlogPostsMinView)

    def test_search_blogs_url_returns_search_blog_post_view(self):
        url = reverse('search')
        self.assertEquals(resolve(url).func.view_class, SearchBlogPosts)

    def test_category_blogs_url_returns_blog_post_category_view(self):
        url = reverse('category')
        self.assertEquals(resolve(url).func.view_class, BlogPostCategoryView)

    def test_blogs_categories_url_returns_blog_post_categories_view(self):
        url = reverse('categories')
        self.assertEquals(resolve(url).func.view_class, BlogPostCategories)

    def test_add_clap_url_returns_add_clap_view(self):
        url = reverse('add-clap')
        self.assertEquals(resolve(url).func.view_class, AddClapView)

    def test_blog_post_details_url_returns_blog_post_details_view(self):
        url = reverse('blog-details', args=['some-slug'])
        self.assertEquals(resolve(url).func.view_class, BlogPostDetailView)

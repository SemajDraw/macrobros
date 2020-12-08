from django.test import TestCase
from blog.models import BlogPost, Categories


class TestBlogModels(TestCase):

    def setUp(self):
        self.blog_post = BlogPost.objects.create(
            title='test blog',
            project_name='test',
            category='macroeconomics',
            excerpt='test',
            summary='test',
            content='test'
        )

    def test_blog_is_assigned_slug_on_creation(self):
        self.assertEquals(self.blog_post.slug, 'test-blog')

    def test_blog_is_assigned_correct_category(self):
        self.assertEquals(self.blog_post.category, Categories.MACROECONOMICS)

    def test_blog_is_assigned_read_time(self):
        self.assertEquals(self.blog_post.read_time, '1 min')

    def test_blog_is_assigned_default_values(self):
        self.assertFalse(self.blog_post.featured)
        self.assertFalse(self.blog_post.popular)
        self.assertEquals(self.blog_post.claps, 0)
        self.assertEquals(self.blog_post.thumbnail, '/default/blog/default-thumbnail.jpg')

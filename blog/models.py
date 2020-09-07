from datetime import datetime

from django.db import models
from django.template.defaultfilters import slugify


class Categories(models.TextChoices):
    CRYPTO = 'crypto'
    FINANCE = 'finance'
    ECONOMICS = 'economics'
    MACRO = 'macro'
    MICRO = 'micro'
    TECH = 'tech'
    TRADING = 'trading'
    INVESTMENT = 'investment'


def upload_to(instance, filename):
    _now = datetime.now()
    return 'images//{year}/{month}/{day}/{title}/{filename}'.format(
        year=_now.strftime('%Y'),
        month=_now.strftime('%m'),
        day=_now.strftime('%d'),
        title=instance.slug,
        filename=filename)


class BlogPost(models.Model):
    title = models.CharField(verbose_name='Title', max_length=100)
    project_name = models.CharField(verbose_name='Project Name', max_length=100)
    slug = models.SlugField(verbose_name='Url Slug')
    category = models.CharField(verbose_name='Category', max_length=50, choices=Categories.choices,
                                default=Categories.CRYPTO)
    thumbnail = models.ImageField(verbose_name='Thumbnail', upload_to=upload_to)
    excerpt = models.TextField(verbose_name='Excerpt')
    content = models.TextField(verbose_name='Content')
    featured = models.BooleanField(verbose_name='Featured', default=False)
    date_created = models.DateTimeField(verbose_name='Date Created', default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset_count = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        # Ensure url slugs with the same title are unique
        if queryset_count == 0:
            self.slug = original_slug
        else:
            self.slug = original_slug + '-' + str(queryset_count - 1)

        # Set the featured blog post
        if self.featured:
            try:
                featured_post = BlogPost.objects.get(featured=True)
                if self != featured_post:
                    featured_post.featured = False
                    featured_post.save()
            except BlogPost.DoesNotExist:
                pass
        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

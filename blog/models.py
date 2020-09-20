from datetime import datetime

from django.db import models
from django.template.defaultfilters import slugify


class Categories(models.TextChoices):
    CRYPTO = 'crypto'
    MACRO = 'macro'
    PRECIOUS_METALS = 'precious-metals'
    WEALTH_CYCLES = 'wealth-cycles'
    # ECONOMICS = 'economics'
    # INVESTMENT = 'investment'
    # TECH = 'tech'
    # TRADING = 'trading'


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
    ticker = models.CharField(verbose_name='Ticker', max_length=50, blank=True)
    market_pair = models.CharField(verbose_name='Market Pair', max_length=50, blank=True)
    slug = models.SlugField(verbose_name='Url Slug')
    category = models.CharField(verbose_name='Category', max_length=50, choices=Categories.choices,
                                default=Categories.CRYPTO)
    header_img = models.ImageField(verbose_name='Header Img', upload_to=upload_to, blank=True)
    thumbnail = models.ImageField(verbose_name='Thumbnail Img',
                                  upload_to=upload_to,
                                  default='/default/default-thumbnail.jpg')
    thumbnail_alt = models.TextField(verbose_name='Tumbnail Alt')
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

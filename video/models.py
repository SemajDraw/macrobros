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
    return 'images/video/{year}/{month}/{day}/{title}/{filename}'.format(
        year=_now.strftime('%Y'),
        month=_now.strftime('%m'),
        day=_now.strftime('%d'),
        title=instance.slug,
        filename=filename)


class BlogPost(models.Model):
    title = models.CharField(verbose_name='Title', max_length=100)
    category = models.CharField(verbose_name='Category', max_length=50, choices=Categories.choices,
                                default=Categories.CRYPTO)
    header_img = models.ImageField(verbose_name='Header Img', upload_to=upload_to, blank=True)
    thumbnail = models.ImageField(verbose_name='Thumbnail Img',
                                  upload_to=upload_to,
                                  default='/default/default-thumbnail.jpg')
    thumbnail_alt = models.TextField(verbose_name='Tumbnail Alt')
    excerpt = models.TextField(verbose_name='Excerpt')
    featured = models.BooleanField(verbose_name='Featured', default=False)
    date_created = models.DateTimeField(verbose_name='Date Created', default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        # Set the featured video
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

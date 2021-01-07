from datetime import datetime
import readtime
from django.db import models
from django.template.defaultfilters import slugify


class Categories(models.TextChoices):
    CRYPTO_PROJECTS = 'crypto-projects'
    MACROECONOMICS = 'macroeconomics'


def upload_to(instance, filename):
    _now = datetime.now()
    year = _now.strftime('%Y')
    month = _now.strftime('%m')
    day = _now.strftime('%d')
    return f'images/blog/{year}/{month}/{day}/{instance.slug}/{filename}'


class BlogPost(models.Model):
    title = models.CharField(verbose_name='Title', max_length=100, unique=True)
    project_name = models.CharField(verbose_name='Project Name', max_length=100)
    ticker = models.CharField(verbose_name='Ticker', max_length=50, blank=True)
    display_chart = models.BooleanField(verbose_name='Display Chart', default=False)
    market_pair = models.CharField(verbose_name='Market Pair', max_length=50, blank=True)
    slug = models.SlugField(verbose_name='Url Slug')
    category = models.CharField(verbose_name='Category', max_length=50, choices=Categories.choices,
                                default=Categories.CRYPTO_PROJECTS)
    header_img = models.ImageField(verbose_name='Header Img', upload_to=upload_to, blank=True)
    thumbnail = models.ImageField(verbose_name='Thumbnail Img',
                                  upload_to=upload_to,
                                  default='/default/blog/default-thumbnail.jpg')
    thumbnail_alt = models.TextField(verbose_name='Thumbnail Alt')
    icon = models.FileField(verbose_name='Icon',
                            upload_to=upload_to,
                            blank=True)
    excerpt = models.TextField(verbose_name='Excerpt')
    summary = models.TextField(verbose_name='Summary')
    content = models.TextField(verbose_name='Content')
    featured = models.BooleanField(verbose_name='Featured', default=False)
    popular = models.BooleanField(verbose_name='Popular', default=False)
    date_created = models.DateTimeField(verbose_name='Date Created', default=datetime.now, blank=True)
    read_time = models.CharField(verbose_name='Read Time', max_length=200, blank=True)
    claps = models.IntegerField(verbose_name='Claps', blank=True, default=0)

    def save(self, *args, **kwargs):
        # Set Default Icon Based on Category
        if not self.icon:
            self.icon = f'/default/category_icons/{self.category}.svg'

        # Create Blog Url Slug
        self.slug = slugify(self.title)

        # Calculate Read Time of Blog Post
        self.read_time = readtime.of_html(self.summary + self.content).text

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

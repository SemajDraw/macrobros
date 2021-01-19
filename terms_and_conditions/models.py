from datetime import datetime
from django.db import models


class TermsAndCondition(models.Model):
    title = models.CharField(verbose_name='Title', max_length=100)
    slug = models.CharField(verbose_name='Slug', max_length=50)
    content = models.TextField(verbose_name='Content')
    date_created = models.DateTimeField(verbose_name='Date Created', default=datetime.now, blank=True)

    def __str__(self):
        return self.title

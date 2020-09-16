from django.db import models


class TermsAndConditions(models.Model):
    title = models.CharField(verbose_name='Title', max_length=100)
    content = models.TextField(verbose_name='Content')

    def __str__(self):
        return self.title

from django.db import models
from decimal import Decimal
from djongo.models import JSONField
import uuid


class CurrencyField(models.DecimalField):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def to_python(self, value):
        try:
            return super(CurrencyField, self).to_python(value).quantize(Decimal("0.00"))
        except AttributeError:
            return 'Attribute not found'


class Course(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(verbose_name='Name', max_length=250, blank=False, null=False)
    price = CurrencyField(verbose_name='Price', decimal_places=2, max_digits=10, blank=False, null=False)
    level = models.CharField(verbose_name='Level', max_length=100, blank=False, null=False)
    type = models.CharField(verbose_name='Type', max_length=100, blank=False, null=False)
    image = models.CharField(verbose_name='Image', max_length=150, blank=False, null=False)
    description = JSONField(verbose_name='Description')
    author = models.CharField(verbose_name='Author', max_length=100, blank=False, null=False)
    date_added = models.DateTimeField(verbose_name='Date Added', auto_now_add=True)

    def __str__(self):
        return self.name

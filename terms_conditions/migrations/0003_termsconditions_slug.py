# Generated by Django 3.1.1 on 2020-09-16 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('terms_conditions', '0002_auto_20200916_1832'),
    ]

    operations = [
        migrations.AddField(
            model_name='termsconditions',
            name='slug',
            field=models.CharField(default='', max_length=50, verbose_name='Slug'),
            preserve_default=False,
        ),
    ]

# Generated by Django 3.1.5 on 2021-01-17 17:00

import blog.models
import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, unique=True, verbose_name='Title')),
                ('project_name', models.CharField(max_length=100, verbose_name='Project Name')),
                ('ticker', models.CharField(blank=True, max_length=50, verbose_name='Ticker')),
                ('display_chart', models.BooleanField(default=False, verbose_name='Display Chart')),
                ('market_pair', models.CharField(blank=True, max_length=50, verbose_name='Market Pair')),
                ('slug', models.SlugField(verbose_name='Url Slug')),
                ('category', models.CharField(choices=[('crypto-projects', 'Crypto Projects'), ('macroeconomics', 'Macroeconomics')], default='crypto-projects', max_length=50, verbose_name='Category')),
                ('header_img', models.ImageField(blank=True, upload_to=blog.models.upload_to, verbose_name='Header Img')),
                ('thumbnail', models.ImageField(default='/default/blog/default-thumbnail.jpg', upload_to=blog.models.upload_to, verbose_name='Thumbnail Img')),
                ('thumbnail_alt', models.TextField(verbose_name='Thumbnail Alt')),
                ('icon', models.FileField(blank=True, upload_to=blog.models.upload_to, verbose_name='Icon')),
                ('excerpt', models.TextField(verbose_name='Excerpt')),
                ('summary', models.TextField(verbose_name='Summary')),
                ('content', models.TextField(verbose_name='Content')),
                ('featured', models.BooleanField(default=False, verbose_name='Featured')),
                ('popular', models.BooleanField(default=False, verbose_name='Popular')),
                ('date_created', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='Date Created')),
                ('read_time', models.CharField(blank=True, max_length=200, verbose_name='Read Time')),
                ('claps', models.IntegerField(blank=True, default=0, verbose_name='Claps')),
            ],
        ),
    ]
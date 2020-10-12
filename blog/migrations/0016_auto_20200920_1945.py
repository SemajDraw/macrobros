# Generated by Django 3.1.1 on 2020-09-20 19:45

import blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0015_auto_20200918_2302'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='market_pair',
            field=models.CharField(blank=True, max_length=50, verbose_name='Market Pair'),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='category',
            field=models.CharField(choices=[('crypto', 'Crypto'), ('macro', 'Macro'), ('precious-metals', 'Precious Metals'), ('wealth-cycles', 'Wealth Cycles')], default='crypto', max_length=50, verbose_name='Category'),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='thumbnail',
            field=models.ImageField(default='/default/default-thumbnail.jpg', upload_to=blog.models.upload_to, verbose_name='Thumbnail Img'),
        ),
    ]
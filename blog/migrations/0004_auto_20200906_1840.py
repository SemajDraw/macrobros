# Generated by Django 3.1.1 on 2020-09-06 18:40

import blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20200906_1823'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='thumbnail',
            field=models.ImageField(upload_to=blog.models.upload_to, verbose_name='Thumbnail'),
        ),
    ]

# Generated by Django 3.1.1 on 2020-10-07 20:35

import blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0024_auto_20201007_2031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='icon',
            field=models.FileField(blank=True, upload_to=blog.models.upload_to, verbose_name='Icon'),
        ),
    ]

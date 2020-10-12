# Generated by Django 3.1.2 on 2020-10-12 19:42

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_user_clapped_blogs'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='clapped_blogs',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(blank=True, null=True, verbose_name='Clapped Blogs'), blank=True, default=list, size=None),
        ),
    ]
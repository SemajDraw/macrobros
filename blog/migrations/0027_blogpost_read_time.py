# Generated by Django 3.1.2 on 2020-10-07 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0026_auto_20201007_2100'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='read_time',
            field=models.CharField(default='', max_length=200, verbose_name='Read Time'),
            preserve_default=False,
        ),
    ]
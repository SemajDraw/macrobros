# Generated by Django 3.1.1 on 2020-09-11 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_blogpost_ticker'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='category',
            field=models.CharField(choices=[('crypto', 'Crypto'), ('precious metals', 'Precious Metals'), ('economics', 'Economics'), ('macro', 'Macro'), ('wealth cycles', 'Wealth Cycles'), ('tech', 'Tech'), ('trading', 'Trading'), ('investment', 'Investment')], default='crypto', max_length=50, verbose_name='Category'),
        ),
    ]
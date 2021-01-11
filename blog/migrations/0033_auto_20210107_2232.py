# Generated by Django 3.1.4 on 2021-01-07 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0032_blogpost_display_chart'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='category',
            field=models.CharField(choices=[('crypto-projects', 'Crypto Projects'), ('macroeconomics', 'Macroeconomics')], default='crypto-projects', max_length=50, verbose_name='Category'),
        ),
    ]
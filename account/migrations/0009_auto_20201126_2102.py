# Generated by Django 3.1.3 on 2020-11-26 21:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0008_user_is_deleted'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='is_deleted',
            new_name='is_closed',
        ),
    ]
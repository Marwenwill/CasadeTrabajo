# Generated by Django 2.0.2 on 2018-04-06 19:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scrumboard', '0005_merge_20180406_2127'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offre',
            name='owner',
        ),
    ]

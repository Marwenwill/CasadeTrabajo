# Generated by Django 2.0.2 on 2018-05-16 23:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scrumboard', '0029_candidature_idrecruteur'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='candidat',
            name='cvTxt',
        ),
    ]
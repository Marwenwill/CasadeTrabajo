# Generated by Django 2.0.2 on 2018-03-22 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrumboard', '0004_auto_20180322_1354'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidat',
            name='tel',
            field=models.CharField(default=0, max_length=50),
        ),
        migrations.AlterField(
            model_name='recruteur',
            name='tel',
            field=models.CharField(default=0, max_length=50),
        ),
    ]

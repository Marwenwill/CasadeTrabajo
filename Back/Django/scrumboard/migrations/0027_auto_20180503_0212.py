# Generated by Django 2.0.2 on 2018-05-03 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrumboard', '0026_auto_20180503_0202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidat',
            name='cv',
            field=models.CharField(max_length=50000),
        ),
    ]

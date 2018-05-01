# Generated by Django 2.0.2 on 2018-04-30 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrumboard', '0012_auto_20180428_0308'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='candidat',
            name='lastName',
        ),
        migrations.RemoveField(
            model_name='candidat',
            name='name',
        ),
        migrations.RemoveField(
            model_name='recruteur',
            name='lastName',
        ),
        migrations.RemoveField(
            model_name='recruteur',
            name='name',
        ),
        migrations.AddField(
            model_name='candidat',
            name='username',
            field=models.CharField(default='abc', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='recruteur',
            name='username',
            field=models.CharField(default='abc', max_length=50),
            preserve_default=False,
        ),
    ]

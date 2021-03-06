# Generated by Django 2.0.2 on 2018-04-27 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrumboard', '0009_auto_20180427_1359'),
    ]

    operations = [
        migrations.CreateModel(
            name='Candidat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('lastName', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('tel', models.CharField(default=0, max_length=50)),
                ('password', models.CharField(max_length=50)),
                ('civility', models.CharField(max_length=50)),
                ('birthDate', models.DateField()),
                ('gouvernorate', models.CharField(max_length=50)),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]

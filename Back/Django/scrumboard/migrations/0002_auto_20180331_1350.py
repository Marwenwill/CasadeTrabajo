# Generated by Django 2.0.2 on 2018-03-31 11:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scrumboard', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offre',
            name='idRecruteur',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='scrumboard.Recruteur', verbose_name='id'),
        ),
    ]
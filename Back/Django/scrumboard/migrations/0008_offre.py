# Generated by Django 2.0.2 on 2018-03-30 20:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scrumboard', '0007_auto_20180323_1730'),
    ]

    operations = [
        migrations.CreateModel(
            name='Offre',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=100)),
                ('dateAjout', models.DateField()),
                ('nature', models.CharField(max_length=50)),
                ('duree', models.CharField(max_length=50)),
                ('niveau', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=50)),
                ('salaire', models.FloatField(blank=True, null=True)),
                ('idRecruteur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Offre', to='scrumboard.Recruteur')),
            ],
        ),
    ]

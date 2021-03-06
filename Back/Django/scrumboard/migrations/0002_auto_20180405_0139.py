# Generated by Django 2.0.2 on 2018-04-04 23:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scrumboard', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recruteur',
            name='id',
        ),
        migrations.RemoveField(
            model_name='recruteur',
            name='secteur',
        ),
        migrations.AddField(
            model_name='offre',
            name='secteur',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='recruteur',
            name='recruteur_id',
            field=models.AutoField(default=None, primary_key=True, serialize=False, verbose_name='Recruteur'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='offre',
            name='idRecruteur',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='scrumboard.Recruteur', verbose_name='idRecruteur'),
        ),
    ]

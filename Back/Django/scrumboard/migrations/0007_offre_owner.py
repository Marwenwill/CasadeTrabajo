# Generated by Django 2.0.2 on 2018-04-06 19:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('scrumboard', '0006_remove_offre_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='offre',
            name='owner',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='Offre', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]

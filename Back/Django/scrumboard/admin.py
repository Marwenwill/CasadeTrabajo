from django.contrib import admin

from .models import Candidat, Recruteur, Offre, Candidature

admin.site.register(Candidat)
admin.site.register(Recruteur)
admin.site.register(Offre)
admin.site.register(Candidature)
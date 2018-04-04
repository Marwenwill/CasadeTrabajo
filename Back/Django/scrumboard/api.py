from rest_framework.viewsets import ModelViewSet

from .serializers import CandidatSerializer, RecruteurSerializer, OffreSerializer, SecteurSerializer, NatureSerializer, RecruteurByIdSerializer
from .models import Candidat, Recruteur, Offre

class CandidatViewSet(ModelViewSet):
	queryset = Candidat.objects.all()
	serializer_class = CandidatSerializer

class RecruteurViewSet(ModelViewSet):
	queryset = Recruteur.objects.all()
	serializer_class = RecruteurSerializer	

class RecruteurByIdViewSet(ModelViewSet):
	offreQuery = Offre.objects.get(id=1)
	queryset = Recruteur.objects.filter(recruteur_id=1).values( 'entrepriseName',)
	serializer_class = RecruteurByIdSerializer

class OffreViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer


class SecteurViewSet(ModelViewSet):
	queryset = Recruteur.objects.all()
	serializer_class = SecteurSerializer 	

class NatureViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = NatureSerializer 	
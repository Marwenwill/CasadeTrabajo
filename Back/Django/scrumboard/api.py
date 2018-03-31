from rest_framework.viewsets import ModelViewSet

from .serializers import CandidatSerializer, RecruteurSerializer, OffreSerializer
from .models import Candidat, Recruteur, Offre

class CandidatViewSet(ModelViewSet):
	queryset = Candidat.objects.all()
	serializer_class = CandidatSerializer

class RecruteurViewSet(ModelViewSet):
	queryset = Recruteur.objects.all()
	serializer_class = RecruteurSerializer	

class OffreViewSet(ModelViewSet):
	recruter_1 = Recruteur.objects.get(recruteur_id=1)
	queryset = Offre.objects.filter(idRecruteur__recruteur_id=1).select_related('entrepriseName').values()
	serializer_class = OffreSerializer 
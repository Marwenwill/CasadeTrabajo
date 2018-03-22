from rest_framework.viewsets import ModelViewSet

from .serializers import CandidatSerializer, RecruteurSerializer
from .models import Candidat, Recruteur

class CandidatViewSet(ModelViewSet):
	queryset = Candidat.objects.all()
	serializer_class = CandidatSerializer

class RecruteurViewSet(ModelViewSet):
	queryset = Recruteur.objects.all()
	serializer_class = RecruteurSerializer	
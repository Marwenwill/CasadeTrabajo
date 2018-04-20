from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from .serializers import CandidatSerializer, RecruteurSerializer, OffreSerializer, SecteurSerializer, NatureSerializer, RecruteurByIdSerializer
from .models import Candidat, Recruteur, Offre

class CandidatViewSet(ModelViewSet):
	queryset = Candidat.objects.all()
	serializer_class = CandidatSerializer

class RecruteurViewSet(ModelViewSet):
	queryset = Recruteur.objects.all()
	serializer_class = RecruteurSerializer
	#permission_classes = (permissions.IsAuthenticated,) 

class RecruteurByIdViewSet(ModelViewSet):
	queryset = Recruteur.objects.filter(recruteur_id=1).values( 'entrepriseName',)
	serializer_class = RecruteurByIdSerializer
	#permission_classes = (permissions.IsAuthenticated,) 

class OffreViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer
	#permission_classes = (permissions.IsAuthenticated,) 


	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)

class OffreSecteurViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer
	#permission_classes = (permissions.IsAuthenticated,)
	def get_queryset(self, *args, **kwargs):
		return self.queryset.filter(secteur=self.kwargs['secteur']) 


class OffreRecruteurViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer
	#permission_classes = (permissions.IsAuthenticated,) 
	def get_queryset(self, *args, **kwargs):
		return self.queryset.filter(idRecruteur_id=self.kwargs['idRecruteur_id'])


class SecteurViewSet(ModelViewSet):
	queryset = Offre.objects.values( 'secteur',).distinct()
	serializer_class = SecteurSerializer 	
	#permission_classes = (permissions.IsAuthenticated,) 

class NatureViewSet(ModelViewSet):
	queryset = Offre.objects.values( 'nature',).distinct()
	serializer_class = NatureSerializer 
	#permission_classes = (permissions.IsAuthenticated,) 
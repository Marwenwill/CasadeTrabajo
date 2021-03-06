from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from django.core.mail import send_mail

from .serializers import CandidatureJointureSerializer, CandidatureSerializer, CountCSerializer, CountOSerializer,  CountRSerializer, CandidatSerializer, RecruteurSerializer, OffreSerializer, SecteurSerializer, NatureSerializer, RecruteurByIdSerializer, VilleSerializer, EmplacementSerializer, DureeSerializer, NiveauSerializer
from .models import Candidat, Recruteur, Offre, Candidature


class sendEmailViewSet(ModelViewSet):
	queryset = Candidature.objects.all()
	serializer_class = CandidatureSerializer		
		

class CandidatViewSet(ModelViewSet):
	queryset = Candidat.objects.all()
	serializer_class = CandidatSerializer
	

class CandidatureViewSet(ModelViewSet):
	queryset = Candidature.objects.all().order_by('-score')
	serializer_class = CandidatureSerializer	

class RecruteurViewSet(ModelViewSet):
	queryset = Recruteur.objects.all()
	serializer_class = RecruteurSerializer

class CandidatureByIdRecruteurViewSet(ModelViewSet):
	queryset = Candidature.objects.all()
	serializer_class = CandidatureJointureSerializer
	permission_classes = (permissions.IsAuthenticated,)
	def get_queryset(self, *args, **kwargs):
		return self.queryset.filter(idRecruteur_id=self.kwargs['idRecruteur_id'], idOffre_id=self.kwargs['idOffre_id']) 

class RecruteurByIdViewSet(ModelViewSet):
	queryset = Recruteur.objects.filter(recruteur_id=1).values( 'entrepriseName',)
	serializer_class = RecruteurByIdSerializer
	permission_classes = (permissions.IsAuthenticated,) 


class OffreViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer


class OffreSecteurViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer
	permission_classes = (permissions.IsAuthenticated,)
	def get_queryset(self, *args, **kwargs):
		return self.queryset.filter(secteur=self.kwargs['secteur']) 

class OffreNatureViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer
	permission_classes = (permissions.IsAuthenticated,)
	def get_queryset(self, *args, **kwargs):
		return self.queryset.filter(nature=self.kwargs['nature'])

class OffreDureeViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer
	permission_classes = (permissions.IsAuthenticated,)
	def get_queryset(self, *args, **kwargs):
		return self.queryset.filter(duree=self.kwargs['duree'])

class OffreNiveauViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer
	permission_classes = (permissions.IsAuthenticated,)
	def get_queryset(self, *args, **kwargs):
		return self.queryset.filter(niveau=self.kwargs['niveau'])		


class OffreRecruteurViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer
	permission_classes = (permissions.IsAuthenticated,) 
	def get_queryset(self, *args, **kwargs):
		return self.queryset.filter(idRecruteur_id=self.kwargs['idRecruteur_id'])

class EntrepriseLocationViewSet(ModelViewSet):
	queryset = Recruteur.objects.all()
	serializer_class = RecruteurSerializer
	permission_classes = (permissions.IsAuthenticated,) 
	def get_queryset(self, *args, **kwargs):
		return self.queryset.filter(emplacement=self.kwargs['emplacement'])

class SearchViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = OffreSerializer
	permission_classes = (permissions.IsAuthenticated,) 
	def get_queryset(self, *args, **kwargs):
		return self.queryset.filter(title__contains=self.kwargs['toFind'])

class SecteurViewSet(ModelViewSet):
	queryset = Offre.objects.values( 'secteur',).distinct()
	serializer_class = SecteurSerializer 	
	permission_classes = (permissions.IsAuthenticated,) 


class NatureViewSet(ModelViewSet):
	queryset = Offre.objects.values( 'nature',).distinct()
	serializer_class = NatureSerializer 
	permission_classes = (permissions.IsAuthenticated,) 

class VilleViewSet(ModelViewSet):
	queryset = Offre.objects.all().distinct()
	serializer_class = VilleSerializer 
	permission_classes = (permissions.IsAuthenticated,) 	

class EmplacementViewSet(ModelViewSet):
	queryset = Recruteur.objects.values('emplacement').distinct()
	serializer_class = EmplacementSerializer 
	permission_classes = (permissions.IsAuthenticated,) 		

class DureeViewSet(ModelViewSet):
	queryset = Offre.objects.values('duree').distinct()
	serializer_class = DureeSerializer 
	permission_classes = (permissions.IsAuthenticated,) 	

class NiveauViewSet(ModelViewSet):
	queryset = Offre.objects.values('niveau').distinct()
	serializer_class = NiveauSerializer 
	permission_classes = (permissions.IsAuthenticated,)	

class CountCViewSet(ModelViewSet):
	queryset = Candidat.objects.all()
	serializer_class = CountCSerializer 
	permission_classes = (permissions.IsAuthenticated,) 	

class CountRViewSet(ModelViewSet):
	queryset = Recruteur.objects.all()
	serializer_class = CountRSerializer 
	permission_classes = (permissions.IsAuthenticated,) 

class CountOViewSet(ModelViewSet):
	queryset = Offre.objects.all()
	serializer_class = CountOSerializer 
	permission_classes = (permissions.IsAuthenticated,) 		

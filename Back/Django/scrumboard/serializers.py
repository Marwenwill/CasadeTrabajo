from rest_framework import serializers
from django.contrib.auth.models import User


from .models import Candidat, Recruteur, Offre

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

class CandidatSerializer(serializers.ModelSerializer):

	class Meta:
		model = Candidat
		fields = '__all__'

class RecruteurSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = '__all__'		

class RecruteurByIdSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = ( 'entrepriseName','emplacement', 'logo')

class EmplacementSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = ('emplacement',)

class OffreSerializer(serializers.ModelSerializer):
    entrepriseName = RecruteurByIdSerializer(source='idRecruteur', read_only=True)

    class Meta:
        model = Offre
        fields = ('owner', 'id', 'title', 'dateAjout', 'nature', 'duree', 'niveau', 'description', 'salaire', 'secteur', 'idRecruteur', 'entrepriseName')	

class SecteurSerializer(serializers.ModelSerializer):

	class Meta:
		model = Offre
		fields = ('secteur',)	

class NatureSerializer(serializers.ModelSerializer):

	class Meta:
		model = Offre
		fields = ('nature',)

class EmplacementSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = ('emplacement',)		

class VilleSerializer(serializers.ModelSerializer):
	emplacements = EmplacementSerializer(source='idRecruteur', read_only=True)

	class Meta:
		model = Offre
		fields = ( 'emplacements',)				
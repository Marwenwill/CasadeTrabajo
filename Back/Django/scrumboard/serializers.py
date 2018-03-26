from rest_framework import serializers


from .models import Candidat, Recruteur, Offre

class CandidatSerializer(serializers.ModelSerializer):

	class Meta:
		model = Candidat
		fields = '__all__'

class RecruteurSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = '__all__'		

class OffreSerializer(serializers.ModelSerializer):

	class Meta:
		model = Offre
		fields = '__all__'			
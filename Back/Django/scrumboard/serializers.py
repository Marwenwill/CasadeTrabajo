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

class RecruteurByIdSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = ( 'entrepriseName','emplacement', 'logo')

class OffreSerializer(serializers.ModelSerializer):
    entrepriseName = RecruteurByIdSerializer(source='idRecruteur', read_only=True)

    class Meta:
        model = Offre
        fields = ('title', 'dateAjout', 'description', 'entrepriseName')	

class SecteurSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = ('secteur',)	

class NatureSerializer(serializers.ModelSerializer):

	class Meta:
		model = Offre
		fields = ('nature',)			
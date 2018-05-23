from rest_framework import serializers
from django.contrib.auth.models import User


from .models import Candidat, Recruteur, Offre, Candidature

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')


class RecruteurSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = '__all__'		

class CandidatSerializer(serializers.ModelSerializer):

	class Meta:
		model = Candidat
		fields = '__all__'

class RecruteurByIdSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = '__all__'

class CandidatureSerializer(serializers.ModelSerializer):

	class Meta:
		model = Candidature
		fields = '__all__'		

class CandidatByIdSerializer(serializers.ModelSerializer):

	class Meta:
		model = Candidat
		fields = '__all__'

class EmplacementSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = ('emplacement',)

class OffreSerializer(serializers.ModelSerializer):
    entrepriseName = RecruteurByIdSerializer(source='idRecruteur', read_only=True)

    class Meta:
        model = Offre
        fields = ('id', 'title', 'dateAjout', 'nature', 'duree', 'niveau', 'description', 'salaire', 'secteur', 'idRecruteur', 'entrepriseName')	

class CandidatureJointureSerializer(serializers.ModelSerializer):
    candidat = CandidatByIdSerializer(source='idCandidat', read_only=True)
    offre = OffreSerializer(source='idOffre', read_only=True)
    
    class Meta:
        model = Candidature
        fields = ('dateAjout', 'score', 'candidat', 'offre')	


class SecteurSerializer(serializers.ModelSerializer):

	class Meta:
		model = Offre
		fields = ('secteur',)	

class NatureSerializer(serializers.ModelSerializer):

	class Meta:
		model = Offre
		fields = ('nature',)

class DureeSerializer(serializers.ModelSerializer):

	class Meta:
		model = Offre
		fields = ('duree',)

class NiveauSerializer(serializers.ModelSerializer):

	class Meta:
		model = Offre
		fields = ('niveau',)


class EmplacementSerializer(serializers.ModelSerializer):

	class Meta:
		model = Recruteur
		fields = ('emplacement',)		

class VilleSerializer(serializers.ModelSerializer):
	emplacements = EmplacementSerializer(source='idRecruteur', read_only=True)

	class Meta:
		model = Offre
		fields = ( 'emplacements',)		

class CountCSerializer(serializers.ModelSerializer):
	user_count = serializers.SerializerMethodField()

	class Meta:
		model = Candidat
		fields = ( 'user_count',)	

	def get_user_count(self, obj):
		return Candidat.objects.distinct().count()

class CountRSerializer(serializers.ModelSerializer):
	user_count = serializers.SerializerMethodField()

	class Meta:
		model = Recruteur
		fields = ( 'user_count',)	

	def get_user_count(self, obj):
		return Recruteur.objects.distinct().count()


class CountOSerializer(serializers.ModelSerializer):
	user_count = serializers.SerializerMethodField()

	class Meta:
		model = Offre
		fields = ( 'user_count',)	

	def get_user_count(self, obj):
		return Offre.objects.distinct().count()				
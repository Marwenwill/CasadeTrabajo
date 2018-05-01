from django.db import models
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Candidat(models.Model):			
	username = models.CharField(max_length=50)
	email = models.CharField(max_length=50)
	tel = models.CharField(max_length=50, default=0)
	password = models.CharField(max_length=50)
	civility = models.CharField(max_length=50)
	birthDate = models.DateField(auto_now=False, auto_now_add=False)
	gouvernorate = models.CharField(max_length=50)
	def __str__(self):
		return "Candidat: {}".format(self.username)


@python_2_unicode_compatible
class Recruteur(models.Model):	
	recruteur_id = models.AutoField(primary_key=True,verbose_name="Recruteur") 		
	username = models.CharField(max_length=50)
	email = models.CharField(max_length=50)
	tel = models.CharField(max_length=50, default=0)
	password = models.CharField(max_length=50)
	entrepriseName = models.CharField(max_length=50)
	webSite = models.CharField(max_length=50)
	emplacement = models.CharField(max_length=50)
	logo = models.CharField(max_length=100)
	description = models.CharField(max_length=50000)
	nbEmployee = models.IntegerField(null=True, blank=True)
	nbOffres = models.IntegerField(null=True, blank=True)
	def __str__(self):
		return "Recruteur: {}".format(self.entrepriseName)

@python_2_unicode_compatible
class Offre(models.Model):			
	title = models.CharField(max_length=100, blank=True, default=0)
	dateAjout = models.DateField(auto_now=False, auto_now_add=False, blank=True)
	nature = models.CharField(max_length=50, blank=True)
	duree = models.CharField(max_length=50, blank=True)
	niveau = models.CharField(max_length=50, blank=True)
	description = models.CharField(max_length=10000, blank=True)
	salaire = models.FloatField(null=True, blank=True)
	secteur = models.CharField(max_length=50, null=True)
	idRecruteur = models.ForeignKey(Recruteur,verbose_name = "idRecruteur", on_delete=models.CASCADE, default=None)
	owner = models.ForeignKey('auth.User', related_name='Offre', on_delete=models.CASCADE, null=False, blank=True)
	def __str__(self):
		return "Offre: {}".format(self.title)		
		

@python_2_unicode_compatible
class Candidature(models.Model):			
	dateAjout = models.DateField(auto_now=False, auto_now_add=False, blank=True)
	idCandidat = models.ManyToManyField(Candidat,verbose_name = "idCandidat")
	idOffre = models.ManyToManyField(Offre,verbose_name = "idOffre")
	def __str__(self):
		return "Candidature: {}".format(self.id)			



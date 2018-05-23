from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import generics
from rest_framework.decorators import api_view
from .tools import PdfTool
from django.http import HttpResponse
from django.core.mail import send_mail
from .models import Candidat, Candidature, Offre


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer




def convertPDF(request):
	user_name = request.GET.get("username")
	queryset = Candidat.objects.get(username=user_name)
	fichier = open(((queryset.cv).replace('\\', '/').replace('C:/fakepath/', 'C:/CasadeTrabajo/Back/Django/')).replace(".pdf", ".txt"), "w", encoding='utf-8')
	fichier.write(PdfTool.convert((queryset.cv).replace('\\', '/').replace('C:/fakepath/', 'C:/CasadeTrabajo/Back/Django/')))
	fichier.close()
	return HttpResponse(PdfTool.convert((queryset.cv).replace('\\', '/').replace('C:/fakepath/', 'C:/CasadeTrabajo/Back/Django/')))

def storeScore(request):
	idC = request.GET.get("idC")
	idO = request.GET.get("idO")
	offr = Offre.objects.get(id=idO)
	candida = Candidat.objects.get(id=idC)
	candidatur = Candidature.objects.get(idCandidat=idC, idOffre=idO)
	candidatur.score = PdfTool.storeScore((candida.cv).replace('\\', '/').replace('C:/fakepath/', 'C:/CasadeTrabajo/Back/Django/'), offr.description)
	candidatur.save()
	return HttpResponse(candidatur.score)

def sendEmail(request):
	email = request.GET.get("email")
	objectt = request.GET.get("objectt")
	description = request.GET.get("description")
	id = request.GET.get("id")
	send_mail('Convocation Entretien', description, 'casadetrabajocontact@gmail.com', [email], fail_silently=False)
	return HttpResponse(1)	
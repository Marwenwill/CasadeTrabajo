from .api import CandidatViewSet, RecruteurViewSet, OffreViewSet, SecteurViewSet, NatureViewSet, OffreSecteurViewSet, OffreRecruteurViewSet, OffreNatureViewSet, VilleViewSet, EmplacementViewSet, EntrepriseLocationViewSet, SearchViewSet

from rest_framework.routers import DefaultRouter
# hahahahaha -_-
# chnowa ? chay chay XD
router = DefaultRouter();
router.register(r'Candidats', CandidatViewSet)
router.register(r'Recruteurs', RecruteurViewSet)
router.register(r'Offres', OffreViewSet)
router.register(r'OffresByRecruteur/(?P<idRecruteur_id>\d+)', OffreRecruteurViewSet)
router.register(r'OffresBySecteur/(?P<secteur>[ \w]+)', OffreSecteurViewSet, base_name='Secteurs')
router.register(r'OffresByNature/(?P<nature>[ \w]+)', OffreNatureViewSet, base_name='Natures')
router.register(r'EntrepriseByLocation/(?P<emplacement>[ \w]+)', EntrepriseLocationViewSet, base_name='Locations')
router.register(r'Search/(?P<toFind>[ \w]+)', SearchViewSet, base_name='Search')
router.register(r'Secteurs', SecteurViewSet)
router.register(r'Nature', NatureViewSet)
router.register(r'Ville', VilleViewSet)
router.register(r'Emplacement', EmplacementViewSet)

urlpatterns = router.urls

#Lo a chaque fois lazem taa decon w conexion ouii fibeli
#rit 9otlek e5dem bel flask :p XD ya zah maksa7ha esme7 ya maalem hahahah yekhi khatih l django deja l rester ykharej f resultat shiih(mahéch csrf zaama ?) nn XD

#7ert xD ken tchoufni eni xD ti baz l khedma hedhi xD theb nkhaliw mara okhra ?
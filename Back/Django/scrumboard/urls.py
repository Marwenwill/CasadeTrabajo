from .api import CandidatViewSet, RecruteurViewSet, OffreViewSet, SecteurViewSet, NatureViewSet, OffreSecteurViewSet, OffreRecruteurViewSet, OffreNatureViewSet, VilleViewSet, EmplacementViewSet, EntrepriseLocationViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter();
router.register(r'Candidats', CandidatViewSet)
router.register(r'Recruteurs', RecruteurViewSet)
router.register(r'Offres', OffreViewSet)
router.register(r'OffresByRecruteur/(?P<idRecruteur_id>\d+)', OffreRecruteurViewSet, base_name='Recruteurs')
router.register(r'OffresBySecteur/(?P<secteur>[ \w]+)', OffreSecteurViewSet, base_name='Secteurs')
router.register(r'OffresByNature/(?P<nature>[ \w]+)', OffreNatureViewSet, base_name='Natures')
router.register(r'EntrepriseByLocation/(?P<emplacement>[ \w]+)', EntrepriseLocationViewSet, base_name='Locations')
router.register(r'Secteurs', SecteurViewSet)
router.register(r'Nature', NatureViewSet)
router.register(r'Ville', VilleViewSet)
router.register(r'Emplacement', EmplacementViewSet)

urlpatterns = router.urls
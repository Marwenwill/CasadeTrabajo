from .api import CandidatViewSet, RecruteurViewSet, OffreViewSet, SecteurViewSet, NatureViewSet, OffreSecteurViewSet, OffreRecruteurViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter();
router.register(r'Candidats', CandidatViewSet)
router.register(r'Recruteurs', RecruteurViewSet)
router.register(r'Offres', OffreViewSet)
router.register(r'OffresByRecruteur/(?P<idRecruteur_id>\d+)', OffreRecruteurViewSet, base_name='Recruteurs')
router.register(r'OffresBySecteur/(?P<secteur>[ \w]+)', OffreSecteurViewSet, base_name='Secteurs')
router.register(r'Secteurs', SecteurViewSet)
router.register(r'Nature', NatureViewSet)

urlpatterns = router.urls
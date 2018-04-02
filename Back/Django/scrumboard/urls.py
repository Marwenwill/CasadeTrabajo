from .api import CandidatViewSet, RecruteurViewSet, OffreViewSet, SecteurViewSet, NatureViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter();
router.register(r'Candidats', CandidatViewSet)
router.register(r'Recruteurs', RecruteurViewSet)
router.register(r'Offres', OffreViewSet)
router.register(r'Secteurs', SecteurViewSet)
router.register(r'Nature', NatureViewSet)


urlpatterns = router.urls
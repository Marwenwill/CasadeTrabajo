from .api import CandidatViewSet, RecruteurViewSet, OffreViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter();
router.register(r'Candidats', CandidatViewSet)
router.register(r'Recruteurs', RecruteurViewSet)
router.register(r'Offres', OffreViewSet)


urlpatterns = router.urls
from .api import CandidatViewSet, RecruteurViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter();
router.register(r'Candidats', CandidatViewSet)
router.register(r'Recruteurs', RecruteurViewSet)

urlpatterns = router.urls
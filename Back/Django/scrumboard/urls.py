from .api import CandidatureViewSet, CountCViewSet, CountRViewSet, CountOViewSet, CandidatViewSet, RecruteurViewSet, OffreViewSet, SecteurViewSet, NatureViewSet, OffreSecteurViewSet, OffreRecruteurViewSet, OffreNatureViewSet, VilleViewSet, EmplacementViewSet, EntrepriseLocationViewSet, SearchViewSet, OffreDureeViewSet, DureeViewSet, OffreNiveauViewSet, NiveauViewSet

from rest_framework.routers import DefaultRouter


router = DefaultRouter();
router.register(r'Candidats', CandidatViewSet)
router.register(r'Recruteurs', RecruteurViewSet)
router.register(r'Offres', OffreViewSet)
router.register(r'Candidatures', CandidatureViewSet)
router.register(r'OffresByRecruteur/(?P<idRecruteur_id>\d+)', OffreRecruteurViewSet)
router.register(r'OffresBySecteur/(?P<secteur>[ \w]+)', OffreSecteurViewSet, base_name='Secteurs')
router.register(r'OffresByNature/(?P<nature>[ \w]+)', OffreNatureViewSet, base_name='Natures')
router.register(r'OffresByDuree/(?P<duree>[ \w]+)', OffreDureeViewSet, base_name='Duree')
router.register(r'OffresByNiveau/(?P<niveau>[ +\w]+)', OffreNiveauViewSet, base_name='Niveau')
router.register(r'EntrepriseByLocation/(?P<emplacement>[ \w]+)', EntrepriseLocationViewSet, base_name='Locations')
router.register(r'Search/(?P<toFind>[ \w]+)', SearchViewSet, base_name='Search')
router.register(r'Secteurs', SecteurViewSet)
router.register(r'Nature', NatureViewSet)
router.register(r'Ville', VilleViewSet)
router.register(r'Niveau', NiveauViewSet)
router.register(r'Duree', DureeViewSet)
router.register(r'Emplacement', EmplacementViewSet)
router.register(r'CountC', CountCViewSet, base_name='users-count')
router.register(r'CountR', CountRViewSet, base_name='Locations')
router.register(r'CountO', CountOViewSet, base_name='Locations')

urlpatterns = router.urls


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { ModalsComponent } from './modals.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { EntrepriseComponent } from './entreprise.component';
import { OffresComponent } from './offres.component';
import { OffresEntrepriseComponent } from './offres-entreprise.component';
import { OffresSecteursComponent } from './offres-secteurs.component';
import { OfrresNatureComponent } from './ofrres-nature.component'
import { EntrepriseEmplacementComponent } from './entreprise-emplacement.component'
import { MesoffresComponent } from './mesoffres.component'
import { UserComponent } from './user.component'
import { EntrepriseProfileComponent } from './entreprise-profile.component'
import { OffreDetailComponent } from 'app/components/offre-detail.component';
import { SearchComponent } from 'app/components/search.component';
import { OffreDureeComponent } from 'app/components/offre-duree.component';
import { OffreNiveauComponent } from 'app/components/offre-niveau.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
      {
        path: 'EntrepriseProfile/:id',
        component: EntrepriseProfileComponent,
        data: {
          title: 'Entreprise Detail'
        }
      },
      {
        path: 'niveau/:niveau',
        component: OffreNiveauComponent,
        data: {
          title: 'Niveau'
        }
      },
      {
        path: 'duree/:duree',
        component: OffreDureeComponent,
        data: {
          title: 'Duree'
        }
      },
      {
        path: 'profile',
        component: UserComponent,
        data: {
          title: 'Edit Profile'
        }
      },
      {
        path: 'search/:toFind',
        component: SearchComponent,
        data: {
          title: 'Edit Profile'
        }
      },
      {
        path: 'mesoffres/:id',
        component: MesoffresComponent,
        data: {
          title: 'Mes Offres'
        }
      },
      {
        path: 'emplacements/:emplacement',
        component: EntrepriseEmplacementComponent,
        data: {
          title: 'Locations'
        }
      },
      {
        path: 'natures/:nature',
        component: OfrresNatureComponent,
        data: {
          title: 'Natures offres'
        }
      },
      {
        path: 'offre',
        component: OffresComponent,
        data: {
          title: 'Offre'
        }
      },
      {
        path: 'entreprise',
        component: EntrepriseComponent,
        data: {
          title: 'Entreprise'
        }
      },
      {
        path: 'secteurs/:secteur',
        component: OffresSecteursComponent,
        data: {
          title: 'Secteurs Entreprise'
        }
      },
      {
        path: 'OffreDetail/:id',
        component: OffreDetailComponent,
        data: {
          title: 'Offre Détail'
        }
      },
      {
        path: 'offres/:id',
        component: OffresEntrepriseComponent,
        data: {
          title: 'Offres Entreprise'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}

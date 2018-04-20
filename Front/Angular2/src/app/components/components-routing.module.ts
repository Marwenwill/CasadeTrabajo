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


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
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

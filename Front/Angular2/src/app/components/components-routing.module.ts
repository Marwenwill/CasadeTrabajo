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
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      },
      {
        path: 'social-buttons',
        component: SocialButtonsComponent,
        data: {
          title: 'Social buttons'
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
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
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
        path: ':id',
        component: OffresEntrepriseComponent,
        data: {
          title: 'Entreprise'
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

import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { EntrepriseComponent } from './entreprise.component';

// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ng2-bootstrap/tabs';
import { TabsComponent } from './tabs.component';
import { CommonModule } from '@angular/common'

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { OffresComponent } from './offres.component';


@NgModule({
  imports: [
    ComponentsRoutingModule,
    ModalModule.forRoot(),
    TabsModule,
    CommonModule
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    ModalsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    EntrepriseComponent,
    OffresComponent
  ]
})
export class ComponentsModule { }

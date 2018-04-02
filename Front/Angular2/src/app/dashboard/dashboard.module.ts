import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common'

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TabsModule } from 'ng2-bootstrap/tabs';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    DropdownModule,
    TabsModule,
    CommonModule
  ],
  declarations: [ DashboardComponent]
})
export class DashboardModule { }

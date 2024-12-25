import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { PillsModule } from 'src/app/shared/custom/pills/pills.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    PillsModule
  ]
})
export class DashboardModule { }

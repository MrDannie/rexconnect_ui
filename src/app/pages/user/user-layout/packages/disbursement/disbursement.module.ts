import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisbursementRoutingModule } from './disbursement-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DisbursementRoutingModule
  ]
})
export class DisbursementModule { }

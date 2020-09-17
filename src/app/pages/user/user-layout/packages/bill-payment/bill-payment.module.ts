import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillPaymentRoutingModule } from './bill-payment-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [DashboardComponent, ReportsComponent],
  imports: [
    CommonModule,
    BillPaymentRoutingModule
  ]
})
export class BillPaymentModule { }

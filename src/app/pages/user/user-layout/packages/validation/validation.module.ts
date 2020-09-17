import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationRoutingModule } from './validation-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ValidationRoutingModule
  ]
})
export class ValidationModule { }

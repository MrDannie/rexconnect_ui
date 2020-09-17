import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileUpdateRoutingModule } from './profile-update-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';


@NgModule({
  declarations: [ChangePasswordComponent, PersonalDetailsComponent],
  imports: [
    CommonModule,
    ProfileUpdateRoutingModule
  ]
})
export class ProfileUpdateModule { }

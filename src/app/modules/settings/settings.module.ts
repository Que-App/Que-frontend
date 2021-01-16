import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './layouts/change-password/change-password.component';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material.module';
import { SettingsNavbarComponent } from './components/settings-navbar/settings-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChangePasswordComponent, SettingsNavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }

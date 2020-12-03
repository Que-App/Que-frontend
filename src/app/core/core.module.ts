import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material.module';
import { AuthorisationComponent } from './components/authorisation/authorisation.component';
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [HomeComponent, AuthorisationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    AuthorisationComponent
  ]
})
export class CoreModule { }

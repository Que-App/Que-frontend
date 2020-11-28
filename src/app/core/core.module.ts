import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material.module';
import { AuthorisationComponent } from './components/authorisation/authorisation.component';


@NgModule({
  declarations: [HomeComponent, AuthorisationComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    AuthorisationComponent
  ]
})
export class CoreModule { }

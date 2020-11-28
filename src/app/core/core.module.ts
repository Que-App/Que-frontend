import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class CoreModule { }

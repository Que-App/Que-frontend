import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponent } from './components/exchanges/exchanges.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ExchangesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
    
  ], exports: [
    ReactiveFormsModule
  ]
})
export class ExchangesModule { }

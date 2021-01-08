import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponent } from './components/exchanges/exchanges.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ExchangesNavbarComponent } from './components/exchanges-navbar/exchanges-navbar.component';
import { IncomingExchangesComponent } from './components/incoming-exchanges/incoming-exchanges.component';
import { RouterModule } from '@angular/router';
import { ExchangeRequestStatusFilterComponent } from './exchange-request-status-filter/exchange-request-status-filter.component';



@NgModule({
  declarations: [ExchangesComponent, ExchangesNavbarComponent, IncomingExchangesComponent, ExchangeRequestStatusFilterComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    FormBuilder,
  ], 
  exports: [
    ReactiveFormsModule
  ]
})
export class ExchangesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponent } from './layouts/exchanges/exchanges.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ExchangesNavbarComponent } from './components/exchanges-navbar/exchanges-navbar.component';
import { IncomingExchangesComponent } from './layouts/incoming-exchanges/incoming-exchanges.component';
import { RouterModule } from '@angular/router';
import { ExchangeRequestStatusFilterComponent } from './components/exchange-request-status-filter/exchange-request-status-filter.component';
import { RequestTailComponent } from './components/request-tail/request-tail.component';
import { HourPrinterPipe } from 'src/app/shared/pipes/hour-printer.pipe';



@NgModule({
  declarations: [ExchangesComponent, ExchangesNavbarComponent, IncomingExchangesComponent, ExchangeRequestStatusFilterComponent, RequestTailComponent, HourPrinterPipe],
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

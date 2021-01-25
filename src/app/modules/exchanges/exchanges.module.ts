import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponent } from './layouts/exchanges/exchanges.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IncomingExchangesComponent } from './layouts/incoming-exchanges/incoming-exchanges.component';
import { RouterModule } from '@angular/router';
import { ExchangeRequestStatusFilterComponent } from './components/exchange-request-status-filter/exchange-request-status-filter.component';
import { RequestTailComponent } from './components/request-tail/request-tail.component';
import { OutgoingExchangesComponent } from './layouts/outgoing-exchanges/outgoing-exchanges.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [ExchangesComponent, IncomingExchangesComponent, ExchangeRequestStatusFilterComponent, RequestTailComponent, OutgoingExchangesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule
  ],
  providers: [
    FormBuilder,
  ], 
  exports: [
    ReactiveFormsModule
  ]
})
export class ExchangesModule { }

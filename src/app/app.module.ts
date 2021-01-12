import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { DatePipe } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ExchangesModule } from './modules/exchanges/exchanges.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { DataModule } from '../app/data/data.module';
import { Globals } from './globals';
import { JwtInterceptor } from './auth/services/jwt-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ExchangesModule,
    ScheduleModule,
    DataModule
  ],
  providers: [
    DatePipe,
    Globals,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor, 
      multi: true 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

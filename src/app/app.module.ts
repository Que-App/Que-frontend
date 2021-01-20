import { ErrorHandler, NgModule } from '@angular/core';
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
import { ErrorService } from './shared/services/error.service';
import { SettingsModule } from './modules/settings/settings.module';
import { QueuesModule } from './modules/queues/queues.module';
import { HourPrinterPipe } from './pipes/hour-printer.pipe';
import { PipesModule } from './pipes/pipes.module';

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
    DataModule,
    SettingsModule,
    QueuesModule,
    PipesModule
  ],
  providers: [
    DatePipe,
    Globals,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor, 
      multi: true 
    },
    {
      provide: ErrorHandler,
      useClass: ErrorService
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

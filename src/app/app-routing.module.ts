import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/services/auth-guard.service';
import { AuthorisationComponent } from './core/components/authorisation/authorisation.component';
import { ExchangesComponent } from './modules/exchanges/layouts/exchanges/exchanges.component';
import { IncomingExchangesComponent } from './modules/exchanges/layouts/incoming-exchanges/incoming-exchanges.component';
import { OutgoingExchangesComponent } from './modules/exchanges/layouts/outgoing-exchanges/outgoing-exchanges.component';
import { MobileBlockerComponent } from './modules/mobile-blocker/components/mobile-blocker/mobile-blocker.component';
import { MobileBlockerService } from './modules/mobile-blocker/services/mobile-blocker.service';
import { QueueComponent } from './modules/queues/layouts/queue/queue.component';
import { ScheduleComponent } from './modules/schedule/components/schedule/schedule.component';
import { ChangePasswordComponent } from './modules/settings/layouts/change-password/change-password.component';

const routes: Routes = [
  { path: 'auth', component: AuthorisationComponent, canActivate: [MobileBlockerService] },
  { path: 'exchanges', component: ExchangesComponent, canActivate: [AuthGuardService && MobileBlockerService] },
  { path: 'exchanges/incoming', component: IncomingExchangesComponent, canActivate: [AuthGuardService && MobileBlockerService] },
  { path: 'exchanges/outgoing', component: OutgoingExchangesComponent, canActivate: [AuthGuardService && MobileBlockerService] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuardService && MobileBlockerService] },
  { path: 'settings/change-password', component: ChangePasswordComponent, canActivate: [AuthGuardService && MobileBlockerService] },
  { path: 'settings', redirectTo: '/settings/change-password', pathMatch: 'full'},
  { path: 'queue', component: QueueComponent, canActivate: [AuthGuardService && MobileBlockerService] },
  { path: 'mobile-block', component: MobileBlockerComponent },
  { path: '**', redirectTo: '/schedule', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

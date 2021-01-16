import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/services/auth-guard.service';
import { AuthorisationComponent } from './core/components/authorisation/authorisation.component';
import { HomeComponent } from './core/components/home/home.component';
import { ExchangesComponent } from './modules/exchanges/layouts/exchanges/exchanges.component';
import { IncomingExchangesComponent } from './modules/exchanges/layouts/incoming-exchanges/incoming-exchanges.component';
import { OutgoingExchangesComponent } from './modules/exchanges/layouts/outgoing-exchanges/outgoing-exchanges.component';
import { ScheduleComponent } from './modules/schedule/components/schedule/schedule.component';
import { ChangePasswordComponent } from './modules/settings/layouts/change-password/change-password.component';

const routes: Routes = [
  { path: 'auth', component: AuthorisationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'exchanges', component: ExchangesComponent, canActivate: [AuthGuardService] },
  { path: 'exchanges/incoming', component: IncomingExchangesComponent, canActivate: [AuthGuardService] },
  { path: 'exchanges/outgoing', component: OutgoingExchangesComponent, canActivate: [AuthGuardService] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuardService] },
  { path: 'settings/change-password', component: ChangePasswordComponent, canActivate: [AuthGuardService] },
  { path: 'settings', redirectTo: '/settings/change-password', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

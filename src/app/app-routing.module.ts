import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/services/auth-guard.service';
import { AuthorisationComponent } from './core/components/authorisation/authorisation.component';
import { HomeComponent } from './core/components/home/home.component';
import { ExchangesComponent } from './modules/exchanges/components/exchanges/exchanges.component';
import { ScheduleComponent } from './modules/schedule/components/schedule/schedule.component';

const routes: Routes = [
  { path: 'auth', component: AuthorisationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'exchanges', component: ExchangesComponent, canActivate: [AuthGuardService] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

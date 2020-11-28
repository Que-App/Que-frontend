import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorisationComponent } from './core/components/authorisation/authorisation.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  { path: 'auth', component: AuthorisationComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public auth: AuthenticationService, 
    public router: Router
  ) {}
  
    canActivate(): boolean {
    if (this.auth.isUserAuthenticated()) {
      return true;
    }
    this.router.navigateByUrl('/auth');
    return false;
  }

}

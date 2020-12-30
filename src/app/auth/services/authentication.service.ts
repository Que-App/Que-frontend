import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService } from 'src/app/data/api/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private userApi: UserApiService
  ) { }

  logIn(username: string, password: string): void {
    if(localStorage.getItem('token') != null) this.logOut();
    this.userApi.authUser(username, password).subscribe(authResponse => {
      localStorage.setItem('token', authResponse.token);
    });
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth');
  }

  isUserAuthenticated(): boolean {
    if(localStorage.getItem('token') == null || this.isTokenExpired(localStorage.getItem('token')))
      return false; 
    else true;
  }

  private isTokenExpired(token: string): boolean {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

}

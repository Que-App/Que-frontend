import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthResponse } from '../entities/authResponse'
import { Globals } from 'src/app/globals';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(
    private http: HttpClient,
    private globals: Globals
  ) { }

  authUser(username: string, password: string) {
    const requestUrl = `${this.globals.BASE_URL}/auth`;
    return this.http.post<AuthResponse>(requestUrl, {username, password});
  }

  getUsername(userId: number) {
    const requestUrl = `${this.globals.BASE_URL}/user/${userId}`;
    return this.http.get<User>(requestUrl);
  } 
}

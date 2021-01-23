import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/auth/services/authentication.service'

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.scss']
})
export class AuthorisationComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {}

  logIn(login: string, password: string) {
    this.authenticationService.logIn(login, password);
  }
}

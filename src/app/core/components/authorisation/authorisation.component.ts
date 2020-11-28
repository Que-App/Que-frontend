import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.scss']
})
export class AuthorisationComponent implements OnInit {

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {}

  logIn(login: string, password: string) {
    // this.dataService.logIn(login, password);
    this.router.navigateByUrl('/home');
  }
}

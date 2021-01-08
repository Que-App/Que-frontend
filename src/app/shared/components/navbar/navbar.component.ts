import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { NavbarPathConverterPipe } from '../../pipes/navbar-path-converter.pipe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input('pathList') pathList: string[] = ['home'];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private pathConverter: NavbarPathConverterPipe
  ) { }

  ngOnInit(): void {}

  routeTo(location: string) {
    this.router.navigateByUrl(this.pathConverter.transform(location));
  }

  logOut() {
    this.authenticationService.logOut();
  }

}

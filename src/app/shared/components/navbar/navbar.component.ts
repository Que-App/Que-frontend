import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/auth/services/authentication.service';


export interface navElement {
  icon: string;
  text: string;
  link: string;
  verifier: ActiveNavElement;
}

export enum ActiveNavElement {
  HOME = 'home',
  SCHEDULE = 'schedule',
  EXCHANGE_SEND = 'exchange_send',
  EXCHANGE_INCOMING = 'exchange_incoming',
  EXCHANGE_OUTGOING = 'exchange_outgoing',
  QUEUE = 'queue',
  NOTES = 'notes'
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  @Input('active') activeNavElement: ActiveNavElement;

  list: navElement[] = [
    { icon: 'home', text: 'HOME', link: '', verifier: ActiveNavElement.HOME},
    { icon: 'event', text: 'SCHEDULE', link: 'schedule', verifier: ActiveNavElement.SCHEDULE},
    { icon: 'swap_horiz', text: 'EXCHANGE' + '\n' + 'REQUEST', link: 'exchanges', verifier: ActiveNavElement.EXCHANGE_SEND},
    { icon: 'save_alt', text: 'INCOMING' + '\n' + 'REQUESTS', link: 'exchanges/incoming', verifier: ActiveNavElement.EXCHANGE_INCOMING},
    { icon: 'publish', text: 'OUTGOING' + '\n' + 'REQUESTS', link: 'exchanges/outgoing', verifier: ActiveNavElement.EXCHANGE_OUTGOING},
    { icon: 'accessibility_new', text: 'YOUR' + '\n' + 'QUEUE', link: 'queue', verifier: ActiveNavElement.QUEUE},
    { icon: 'description', text: 'NOTES', link: 'https://zskpoznan.sharepoint.com/sites/Notatki2B/Shared%20Documents/Forms/AllItems.aspx', verifier: ActiveNavElement.NOTES},

  ]

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {}

  routeTo(location: string) {
    if (location.includes('https://')) window.open(location, '_blank');
    else this.router.navigateByUrl(location);
  }

  logOut() {
    this.authenticationService.logOut();
  }


}


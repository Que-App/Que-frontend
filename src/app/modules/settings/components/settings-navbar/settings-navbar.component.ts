import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';



export interface SettingsSidebarOption {
  icon: string;
  description: string;
  link: string;
  verifier: SettingsSidebarOptionName;
}

export enum SettingsSidebarOptionName {
  CHANGE_PSSWD = 'change_password',
  CREDITS = 'credits'
}

@Component({
  selector: 'app-settings-navbar',
  templateUrl: './settings-navbar.component.html',
  styleUrls: ['./settings-navbar.component.scss']
})

export class SettingsNavbarComponent implements OnInit {
  @Input('verifier') activeIcon: SettingsSidebarOptionName; 
  position: TooltipPosition = 'right';

  navList: SettingsSidebarOption[] = [
    { icon: 'lock', description: 'Change password', link: 'settings/change-password', verifier: SettingsSidebarOptionName.CHANGE_PSSWD },
    { icon: 'integration_instructions', description: 'Credits', link: 'settings/credits' , verifier: SettingsSidebarOptionName.CREDITS }
  ];

  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  //  this.changeIconColor();
  }

  // changeIconColor() {
  //   switch(this.activeIcon) {
  //     case 'sendRequest': this.elementRef.nativeElement.querySelector('#send-request-icon').style.color = '#72272A'; break;
  //     case 'incomingRequests': this.elementRef.nativeElement.querySelector('#incoming-requests-icon').style.color = '#72272A'; break;
  //     case 'allRequests': this.elementRef.nativeElement.querySelector('#all-requests-icon').style.color = '#72272A'; break;
  //     case 'outgoingRequests': this.elementRef.nativeElement.querySelector('#outgoing-requests-icon').style.color = '#72272A'; break;
  //   }
  // }

  routeTo(link: string) {
    this.router.navigateByUrl(link);
  }
}

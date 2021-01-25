import { Component, Input, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {}

  routeTo(link: string) {
    this.router.navigateByUrl(link);
  }
}

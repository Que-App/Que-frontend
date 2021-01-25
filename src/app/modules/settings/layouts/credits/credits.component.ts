import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';
import { SettingsSidebarOptionName } from '../../components/settings-navbar/settings-navbar.component';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
  settingsSidebarVerfier: SettingsSidebarOptionName = SettingsSidebarOptionName.CREDITS;
  version: string = this.globals.VERSION;

  constructor(
    private globals: Globals
  ) { }

  ngOnInit(): void {
  }

}

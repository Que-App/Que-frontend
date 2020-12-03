import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input('pathList') pathList: string[] = ['home'];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  routeTo(location: string) {
    this.router.navigateByUrl(location);
  }

}

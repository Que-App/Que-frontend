import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appTitle = ['Que']
  currentDate: string;
  currentHour: string;

  constructor(
    private router: Router,
    private datePipe: DatePipe,

  ) {}

  ngOnInit(): void {
    setInterval(() => this.timeUpdater(), 1000)
  }

  timeUpdater() {
    this.currentDate = this.datePipe.transform(Date.now(),'EEEE, dd.MM.y');
    this.currentHour = this.datePipe.transform(Date.now(),'HH:mm:ss');  
  }

  routeTo(location: string) {
    this.router.navigateByUrl(location);
  }

  logOut() {
    this.router.navigateByUrl('/auth');
  }

}

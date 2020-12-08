import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { GetRepositoryService } from 'src/app/data/repositories/get-repository.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentDate: string;
  currentHour: string;

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private getRepo: GetRepositoryService
  ) {
    getRepo.getSubjects().subscribe((subs => console.log(subs)))
  }

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

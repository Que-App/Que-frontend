import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  pathList = ['Scheduler']
  subjects = ['Matematyka', 'J.Polski', 'Historia', 'Angielski', 'Informatyka', 'PSK', 'PSO'];
  lessons = ['lekcja 1', 'lekcja 2', 'lekcja 3'];
  queue = ['Janek', 'Piotr', 'Kacper', 'Wiktor', 'Krzysiu', 'Szymon', 'Mateusz G', 'Mateusz B', 'Kuba', 'Paweł']

  constructor() { }

  ngOnInit(): void {
  }

}

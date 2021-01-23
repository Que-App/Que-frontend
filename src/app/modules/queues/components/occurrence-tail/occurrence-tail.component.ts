import { Component, Input, OnInit } from '@angular/core';
import { LessonOccurrence } from 'src/app/data/entities/lessonOccurrence';

@Component({
  selector: 'app-occurrence-tail',
  templateUrl: './occurrence-tail.component.html',
  styleUrls: ['./occurrence-tail.component.scss']
})
export class OccurrenceTailComponent implements OnInit {
  @Input('occurrence') occurrence: LessonOccurrence;
  @Input('pointer') pointer: number;

  constructor() { }

  ngOnInit(): void {
  }

}

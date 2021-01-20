import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/data/entities/lesson';
import { LessonOccurrence } from 'src/app/data/entities/lessonOccurrence';
import { Subject } from 'src/app/data/entities/subject';

export interface OccurrenceTail {
  subject: Subject;
  lesson: Lesson;
  occurrence: LessonOccurrence;
  num: number;
}

@Component({
  selector: 'app-occurrence-tail',
  templateUrl: './occurrence-tail.component.html',
  styleUrls: ['./occurrence-tail.component.scss']
})
export class OccurrenceTailComponent implements OnInit {
  @Input('data') data: OccurrenceTail;

  constructor() { }

  ngOnInit(): void {
    
  }

}

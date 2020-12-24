import { Component, OnInit } from '@angular/core';

import { SubjectApiService } from 'src/app/data/api/subject-api.service';
import { LessonApiService } from 'src/app/data/api/lesson-api.service';
import { OccurrenceApiService } from 'src/app/data/api/occurrence-api.service';

import { Lesson } from 'src/app/data/entities/lesson';
import { Subject } from 'src/app/data/entities/subject';
import { LessonOccurrence } from 'src/app/data/entities/lessonOccurrence'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  pathList = ['Scheduler']
  subjectss = ['Matematyka', 'J.Polski', 'Historia', 'Angielski', 'Informatyka', 'PSK', 'PSO'];
  lessonss = ['lekcja 1', 'lekcja 2', 'lekcja 3'];
  queuee = ['Janek', 'Piotr', 'Kacper', 'Wiktor', 'Krzysiu', 'Szymon', 'Mateusz G', 'Mateusz B', 'Kuba', 'Paweł'];

  subjects: Subject[] = [];
  currentSubject: Subject;

  lessons: Lesson[] = [];
  currentLesson: Lesson;

  queue: Lesson[] = [];

  constructor(
    private subjectApi: SubjectApiService,
    private lessonApi: LessonApiService,
    private occurrenceApi: OccurrenceApiService
  ) { }

  ngOnInit(): void {
    this.subjectApi.getAllSubjects().subscribe(subjects => { 
      this.subjects = subjects;
      this.currentSubject = subjects[0];
      this.lessonApi.getLessons(this.currentSubject.id).subscribe(lessons => {
        this.lessons = lessons;
        this.currentLesson = lessons[0];
        this.occurrenceApi.getNext(this.currentLesson.id, 15).subscribe(occurrences => this.queue = occurrences)
      })
    });
  }

  setCurrentObject(type: string, object) {
    switch(type) {
      case "subject": {
        this.currentSubject = object;
        console.log(this.currentSubject.name)
        break;
      }
      case "lesson": {
        this.currentLesson = object;
        console.log(this.currentLesson.date)
        break;
      }
    }
  }

}

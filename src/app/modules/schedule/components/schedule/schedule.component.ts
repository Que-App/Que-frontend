import { Component, OnInit } from '@angular/core';

import { SubjectApiService } from 'src/app/data/api/subject-api.service';
import { LessonApiService } from 'src/app/data/api/lesson-api.service';
import { OccurrenceApiService } from 'src/app/data/api/occurrence-api.service';

import { Lesson } from 'src/app/data/entities/lesson';
import { Subject as rxSubject, Subscription} from 'rxjs';
import { Subject } from 'src/app/data/entities/subject';
import { LessonOccurrence } from 'src/app/data/entities/lessonOccurrence';
import { mergeMap } from 'rxjs/operators';

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
  subjectsChange: rxSubject<Subject[]> = new rxSubject<Subject[]>();

  lessons: Lesson[] = [];
  lessonsChange: rxSubject<Lesson[]> = new rxSubject<Lesson[]>();

  queue: LessonOccurrence[] = [];
  queueChange: rxSubject<LessonOccurrence[]> = new rxSubject<LessonOccurrence[]>();


  currentSubject: Subject;
  currentSubjectChange: rxSubject<Subject> = new rxSubject<Subject>();

  currentLesson: Lesson;
  currentLessonChange: rxSubject<Lesson> = new rxSubject<Lesson>();

  subscription: Subscription

  constructor(
    private subjectApi: SubjectApiService,
    private lessonApi: LessonApiService,
    private occurrenceApi: OccurrenceApiService
  ) { }

  ngOnInit(): void {
    this.lessonsChange.subscribe(lessons => this.lessons = lessons);
    this.queueChange.subscribe(queue => this.queue = queue); 

    this.subjectApi.getAllSubjects().subscribe(subjects => this.subjects = subjects);

    this.currentSubjectChange.pipe(
      mergeMap(subject => this.lessonApi.getLessons(subject.id))
    ).subscribe(lessons => this.lessons = lessons);

    this.currentLessonChange.pipe(
      mergeMap(lesson => this.occurrenceApi.getNext(lesson.id, 15))
    ).subscribe(occurrences => this.queue = occurrences, error => console.log(error))



  }

  fetchData() {
    this.subjectApi.getAllSubjects().subscribe(subjects => this.subjects = subjects);
  }

  subscriptions() {
    this.subjectApi.getAllSubjects().subscribe(subjects => { 
      this.subjects = subjects;
      this.currentSubject = subjects[0];
      this.currentSubjectChange.subscribe(subject => {
        this.currentSubject = subject
        this.lessonApi.getLessons(this.currentSubject.id).subscribe(lessons => {
          this.lessons = lessons;
          this.currentLesson = lessons[0];
          this.currentLessonChange.subscribe(lesson => {
            this.currentLesson = lesson
            this.occurrenceApi.getNext(this.currentLesson.id, 15).subscribe(occurrences => this.queue = occurrences)
          });
          
      });
      

      })
    });
  }

  subscriptionsV2() {
    this.subjectApi.getAllSubjects().subscribe(subjects => {

    });
  }

  setCurrentObject(type: string, object) {
    switch(type) {
      case "subject": {
        this.currentSubject = object;
        this.currentSubjectChange.next(this.currentSubject);
        console.log(this.currentSubject.name);
        break;
      }
      case "lesson": {
        this.currentLesson = object;
        this.currentLessonChange.next(this.currentLesson);
        console.log(this.currentLesson.nextDate);
        break;
      }
    }
  }

}

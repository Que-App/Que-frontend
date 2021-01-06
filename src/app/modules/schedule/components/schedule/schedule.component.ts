import { Component, OnDestroy, OnInit } from '@angular/core';

import { SubjectApiService } from 'src/app/data/api/subject-api.service';
import { LessonApiService } from 'src/app/data/api/lesson-api.service';
import { OccurrenceApiService } from 'src/app/data/api/occurrence-api.service';
import { Lesson } from 'src/app/data/entities/lesson';
import { Subject } from 'src/app/data/entities/subject';
import { LessonOccurrence } from 'src/app/data/entities/lessonOccurrence';
import { Subject as rxSubject, Subscription} from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { EntityType } from '../../enums/entityType.enum'


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  navPathList = ['home','schedule'];
  
  subjects: Subject[] = [];
  private subjectsChange: rxSubject<Subject[]> = new rxSubject<Subject[]>();

  lessons: Lesson[] = [];
  private lessonsChange: rxSubject<Lesson[]> = new rxSubject<Lesson[]>();

  queue: LessonOccurrence[] = [];
  private queueChange: rxSubject<LessonOccurrence[]> = new rxSubject<LessonOccurrence[]>();

  currentSubject: Subject;
  private currentSubjectChange: rxSubject<Subject> = new rxSubject<Subject>();

  currentLesson: Lesson;
  private currentLessonChange: rxSubject<Lesson> = new rxSubject<Lesson>();

  private subscription: Subscription;

  constructor(
    private subjectApi: SubjectApiService,
    private lessonApi: LessonApiService,
    private occurrenceApi: OccurrenceApiService,
  ) { }

  ngOnInit(): void {
    //Subscribe changes for lessons and queue
    this.subscription = this.lessonsChange.subscribe(lessons => this.lessons = lessons);
    this.subscription.add(this.queueChange.subscribe(queue => this.queue = queue)); 

    //Get entities of subjects, lessons and occurrences from API
    this.subscription.add(this.subjectApi.getAllSubjects().subscribe(subjects => this.subjects = subjects));

    this.subscription.add(this.currentSubjectChange.pipe(
      mergeMap(subject => this.lessonApi.getLessons(subject.id))
    ).subscribe(lessons => {
      this.lessons = lessons;
      this.queue = [];
    }));

    this.subscription.add(this.currentLessonChange.pipe(
      mergeMap(lesson => this.occurrenceApi.getNext(lesson.id, 15))
    ).subscribe(occurrences => this.queue = occurrences));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setCurrentObject(type: string, object) {
    switch(type) {
      case EntityType.SUBJECT: {
        this.currentSubject = object;
        this.currentSubjectChange.next(this.currentSubject);
        break;
      }
      case EntityType.LESSON: {
        this.currentLesson = object;
        this.currentLessonChange.next(this.currentLesson);        
        break;
      }
    }
  }
}


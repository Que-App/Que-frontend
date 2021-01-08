import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject as rxSubject, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { LessonApiService } from 'src/app/data/api/lesson-api.service';
import { OccurrenceApiService } from 'src/app/data/api/occurrence-api.service';
import { SubjectApiService } from 'src/app/data/api/subject-api.service';
import { ExchangeApiService } from 'src/app/data/api/exchange-api.service';
import { Lesson } from 'src/app/data/entities/lesson';
import { LessonOccurrence } from 'src/app/data/entities/lessonOccurrence';
import { Subject } from 'src/app/data/entities/subject';
import { EntityType } from '../../enums/entityType.enum'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss']
})
export class ExchangesComponent implements OnInit, OnDestroy {
  navPathList = ['home','exchanges'];
  userId: string = jwtDecode<JwtPayload>(localStorage.getItem('token')).sub;

  //Fields for sender
  senderSubjects: Subject[] = [];

  senderLessons: Lesson[] = [];
  private senderLessonsChange: rxSubject<Lesson[]> = new rxSubject<Lesson[]>();

  senderQueue: LessonOccurrence[] = [];
  private senderQueueChange: rxSubject<LessonOccurrence[]> = new rxSubject<LessonOccurrence[]>();

  currentSenderSubject: Subject;
  private currentSenderSubjectChange: rxSubject<Subject> = new rxSubject<Subject>();

  currentSenderLesson: Lesson;
  private currentSenderLessonChange: rxSubject<Lesson> = new rxSubject<Lesson>();

  currentSenderOccurrence: LessonOccurrence;
  private currentSenderOccurrenceChange: rxSubject<LessonOccurrence> = new rxSubject<LessonOccurrence>();


  //Fields for receiver
  receiverSubjects: Subject[] = [];

  receiverLessons: Lesson[] = [];
  private receiverLessonsChange: rxSubject<Lesson[]> = new rxSubject<Lesson[]>();

  receiverQueue: LessonOccurrence[] = [];
  private receiverQueueChange: rxSubject<LessonOccurrence[]> = new rxSubject<LessonOccurrence[]>();

  currentReceiverSubject: Subject;
  private currentReceiverSubjectChange: rxSubject<Subject> = new rxSubject<Subject>();

  currentReceiverLesson: Lesson;
  private currentReceiverLessonChange: rxSubject<Lesson> = new rxSubject<Lesson>();

  currentReceiverOccurrence: LessonOccurrence;
  private currentReceiverOccurrenceChange: rxSubject<LessonOccurrence> = new rxSubject<LessonOccurrence>();

  private subscription: Subscription;

  
  formGroup: FormGroup = new FormGroup({
    senderSubject: new FormControl('', Validators.required),
    senderLesson: new FormControl('', Validators.required),
    senderDate: new FormControl('', Validators.required),
    receiverSubject: new FormControl('', Validators.required),
    receiverLesson: new FormControl('', Validators.required),
    receiverDate: new FormControl('', Validators.required)
  });

  constructor(
    private subjectApi: SubjectApiService,
    private lessonApi: LessonApiService,
    private occurrenceApi: OccurrenceApiService,
    private exchangeApi: ExchangeApiService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.subscriptionHandlerForSender();
    this.subscriptionHandlerForReceiver();
    this.registerFormControlCallbacks();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  subscriptionHandlerForSender() {
    //Subscribe changes for lessons
    this.subscription = this.senderLessonsChange.subscribe(lessons => this.senderLessons = lessons);
    this.subscription.add(this.senderQueueChange.subscribe(queue => this.senderQueue = queue));

    //Get entities of subjects, lessons and occurrences from API
    this.subscription.add(this.subjectApi.getAllSubjects().subscribe(subjects => this.senderSubjects = subjects));

    this.subscription.add(this.currentSenderSubjectChange.pipe(
      mergeMap(subject => this.lessonApi.getLessons(subject.id))
    ).subscribe(lessons => {
      this.senderLessons = lessons;
      this.senderQueue = [];
    }));

    this.subscription.add(this.currentSenderLessonChange.pipe(
      mergeMap(lesson => this.occurrenceApi.filterOccurrences(lesson.id, (occurrence => occurrence.userId === (+this.userId)), 21))
    )
    .subscribe(occurrences => {
      this.senderQueue = occurrences;
    }));
  }

  subscriptionHandlerForReceiver() {
    //Subscribe changes for lessons
    this.subscription.add(this.receiverLessonsChange.subscribe(lessons => this.receiverLessons = lessons));
    this.subscription.add(this.receiverQueueChange.subscribe(queue => this.receiverQueue = queue));
    
    //Get entities of subjects, lessons and occurrences from API
    this.subscription.add(this.subjectApi.getAllSubjects().subscribe(subjects => this.receiverSubjects = subjects));

    this.subscription.add(this.currentReceiverSubjectChange.pipe(
      mergeMap(subject => this.lessonApi.getLessons(subject.id))
    ).subscribe(lessons => {
      this.receiverLessons = lessons;
      this.receiverQueue = [];
    }));

    this.subscription.add(this.currentReceiverLessonChange.pipe(
        mergeMap(lesson => this.occurrenceApi.filterOccurrences(lesson.id, (occurrence => occurrence.userId !== (+this.userId)), 21))
      )
      .subscribe(occurrences => {
        this.receiverQueue = occurrences;
      }));
  }

  setCurrentSenderObject(type: string, object) {
    switch(type) {
      case EntityType.SUBJECT: {
        this.currentSenderSubject = object;
        this.currentSenderSubjectChange.next(this.currentSenderSubject);
        break;
      }
      case EntityType.LESSON: {
        this.currentSenderLesson = object;
        this.currentSenderLessonChange.next(this.currentSenderLesson);
        break;
      }
      case EntityType.OCCURRENCE: {
        this.currentSenderOccurrence = object;
        this.currentSenderOccurrenceChange.next(this.currentSenderOccurrence);
        break;
      }
    }
  }

  setCurrentReceiverObject(type: string, object) {
    switch(type) {
      case EntityType.SUBJECT: {
        this.currentReceiverSubject = object;
        this.currentReceiverSubjectChange.next(this.currentReceiverSubject);
        break;
      }
      case EntityType.LESSON: {
        this.currentReceiverLesson = object;
        this.currentReceiverLessonChange.next(this.currentReceiverLesson);
        break;
      }
      case EntityType.OCCURRENCE: {
        this.currentReceiverOccurrence = object;
        this.currentReceiverOccurrenceChange.next(this.currentReceiverOccurrence);
        break;
      }
    }
  }

  registerFormControlCallbacks() {
    (this.formGroup.get('senderSubject') as FormControl).valueChanges.subscribe( () =>
      (this.formGroup.get('senderLesson') as FormControl).reset('')),

    (this.formGroup.get('senderLesson') as FormControl).valueChanges.subscribe( () =>
      (this.formGroup.get('senderDate') as FormControl).reset('')),

    (this.formGroup.get('receiverSubject') as FormControl).valueChanges.subscribe( () =>
      (this.formGroup.get('receiverLesson') as FormControl).reset('')),

    (this.formGroup.get('receiverLesson') as FormControl).valueChanges.subscribe( () => 
      (this.formGroup.get('receiverDate') as FormControl).reset(''))
  }

  sendExchangeRequest() {
    this.exchangeApi.submitRequest(
      +(this.userId),
      +(this.currentSenderLesson.id),
      this.datePipe.transform(this.currentSenderOccurrence.date, 'yyyy-MM-dd'),
      +(this.currentReceiverOccurrence.userId),
      +(this.currentReceiverLesson.id),
      this.datePipe.transform(this.currentReceiverOccurrence.date, 'yyyy-MM-dd')
    ).subscribe()
  }
}


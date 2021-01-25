import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Observable, merge } from 'rxjs';
import { filter, flatMap, take, tap, toArray } from 'rxjs/operators';

import jwtDecode, { JwtPayload } from 'jwt-decode';
import { LessonApiService } from 'src/app/data/api/lesson-api.service';
import { OccurrenceApiService } from 'src/app/data/api/occurrence-api.service';
import { SubjectApiService } from 'src/app/data/api/subject-api.service';
import { LessonOccurrence } from 'src/app/data/entities/lessonOccurrence';
import { ActiveNavElement } from 'src/app/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  activeNavElement: ActiveNavElement = ActiveNavElement.QUEUE;

  userId: string = jwtDecode<JwtPayload>(localStorage.getItem('token')).sub;

  userOccurrences: LessonOccurrence[];
  
  constructor(
    private subjectApi: SubjectApiService,
    private lessonApi: LessonApiService,
    private occurrenceApi: OccurrenceApiService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.fetchOccurrences(8);
  }

  fetchOccurrences(num: number) {
    merge(this.fetchNextUserOccurrences(num), this.fetchPastUserOccurrence()).pipe(
      toArray(),
      tap(occurrences => occurrences.sort((a, b) => (+this.datePipe.transform(a.date, 'yyyyMMdd')) - (+this.datePipe.transform(b.date, 'yyyyMMdd')))),
    ).subscribe(occurrences => this.userOccurrences = occurrences);
  }

  fetchPastUserOccurrence(): Observable<LessonOccurrence> {
    return this.occurrenceApi.updateOccurrences().pipe(
      flatMap(() => this.occurrenceApi.getLastOccurrence()),
      filter(occurrence => this.isLessonOccurrenceCurrent(occurrence)),
    );
  }

  fetchNextUserOccurrences(num: number): Observable<LessonOccurrence> {
    return this.subjectApi.getAllSubjects().pipe(
      flatMap(subjects => subjects),
      flatMap(subject => this.lessonApi.getLessons(subject.id).pipe(
        flatMap(lessons => lessons),
        tap(lesson => lesson["subject"] = subject)
      )),
      flatMap(lesson => this.occurrenceApi.getNext(lesson.id, 21).pipe(
        flatMap(occurrences => occurrences),
        tap(occurrence => occurrence["lesson"] = lesson)
      )),
      filter(occurrence => occurrence.userId === (+this.userId)),
      take(num)
    );
  }

  isLessonOccurrenceCurrent(occurrence: LessonOccurrence): boolean {
    return new Date(this.datePipe.transform(occurrence.date + ', ' + occurrence.time)).getTime() >= new Date().setMinutes(new Date().getMinutes() - 45);
  }

  
}

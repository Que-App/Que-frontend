import { HttpClient } from '@angular/common/http';
import { Injectable, Predicate } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, flatMap, map, take, toArray } from 'rxjs/operators';

import { Globals } from '../../globals';
import { LessonOccurrence } from '../entities/lessonOccurrence'

@Injectable({
  providedIn: 'root'
})
export class OccurrenceApiService {

  constructor(
    private http: HttpClient,
    private globals: Globals
  ) { }

  getPast(num: number): Observable<LessonOccurrence[]> {
    const requestUrl = `${this.globals.BASE_URL}/occurrences/past/${num}`;
    return this.http.get<LessonOccurrence[]>(requestUrl);
  }

  getPastForLesson(lessonId: string, num: number): Observable<LessonOccurrence[]> {
    const requestUrl = `${this.globals.BASE_URL}/occurrences/past/${lessonId}/${num}`;
    return this.http.get<LessonOccurrence[]>(requestUrl);
  }

  getLastOccurrence(): Observable<LessonOccurrence> {
    const requestUrl = `${this.globals.BASE_URL}/occurrences/past/1`;
    return this.http.get<LessonOccurrence[]>(requestUrl).pipe(
      flatMap(occurrences => occurrences),
      take(1)
    );
  }

  getNext(lessonId: string, num: number): Observable<LessonOccurrence[]> {
    const requestUrl = `${this.globals.BASE_URL}/occurrences/next/${lessonId}/${num}`;
    return this.http.get<LessonOccurrence[]>(requestUrl);
  }

  filterOccurrences(lessonId: string, predicate: Predicate<LessonOccurrence>, num: number) {
    return this.getNext(lessonId, num)
    .pipe(
      flatMap(occurrences => occurrences),
      filter(predicate),
      toArray()
    );
  }

  updateOccurrences() {
    const requestUrl = `${this.globals.BASE_URL}/occurrences/update`;
    return this.http.get(requestUrl);
  }
}

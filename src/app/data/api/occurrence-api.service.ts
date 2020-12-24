import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Globals } from '../../globals';
import { Lesson } from '../entities/lesson';
import { LessonOccurrence } from '../entities/lessonOccurrence'

@Injectable({
  providedIn: 'root'
})
export class OccurrenceApiService {

  constructor(
    private http: HttpClient,
    private globals: Globals
  ) { }

  getPast(lessonId: string, num: number): Observable<LessonOccurrence> {
    const requestUrl = `${this.globals.BASE_URL}/occurrences/past/${lessonId}/${num}`;
    return this.http.get<LessonOccurrence>(requestUrl);
  }

  getNext(lessonId: string, num: number): Observable<Lesson[]> {
    const requestUrl = `${this.globals.BASE_URL}/occurrences/next/${lessonId}/${num}`;
    return this.http.get<Lesson[]>(requestUrl);
  }
}

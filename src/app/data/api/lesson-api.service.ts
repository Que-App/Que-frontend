import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Globals } from '../../globals'
import { Lesson } from '../entities/lesson';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class LessonApiService {

  constructor(
    private http: HttpClient,
    private globals: Globals
  ) { }

  getLessons(subjectId: string): Observable<Lesson[]> {
    const requestUrl = `${this.globals.BASE_URL}/subjects/${subjectId}/lessons`;
    return this.http.get<Lesson[]>(requestUrl);
  }

  getLesson(lessonId: string): Observable<Lesson> {
    const requestUrl = `${this.globals.BASE_URL}/lessons/${lessonId}`;
    return this.http.get<Lesson>(requestUrl);
  }

  getUsers(lessonId: string): Observable<User[]> {
    const requestUrl = `${this.globals.BASE_URL}/lessons/${lessonId}/users`;
    return this.http.get<User[]>(requestUrl);
  }
}

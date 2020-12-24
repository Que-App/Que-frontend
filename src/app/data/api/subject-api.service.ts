import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Globals } from 'src/app/globals';
import { Subject } from '../entities/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectApiService {

  constructor(
    private http: HttpClient,
    private globals: Globals
  ) { }

  getAllSubjects(): Observable<Subject[]>{
    const requestUrl = `${this.globals.BASE_URL}/subjects`;
    return this.http.get<Subject[]>(requestUrl);
  }

  getSubject(subjectId: string): Observable<Subject> {
    const requestUrl = `${this.globals.BASE_URL}/subjects/${subjectId}`;
    return this.http.get<Subject>(requestUrl);
  }

}

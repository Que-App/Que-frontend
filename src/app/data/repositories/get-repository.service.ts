import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from '../entities/subject'
import { LessonOccurence } from '../entities/lessonOccurrence'
import { Lesson } from '../entities/lesson'
import { User } from '../entities/user'

@Injectable({
  providedIn: 'root'
})
export class GetRepositoryService {
  apiUrlBase = 'http://localhost:8080/api';
  apiVersionPrefix = '/v1';
  apiUrl: string;
  token: string = "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsY25kIiwiYXVkIjoicXVldWUiLCJleHAiOjE2MDc0Nzk3OTUsInN1YiI6IjYifQ.uOfv80eEHI6pHAMwRDyeRGigNkZJDa2fPHa4MPPy-eDbo_U_HHlZd-7hlPzrV-G2DKc9L_nMaX_BfmqLxu39wA";

  constructor(
    private http: HttpClient,
  ) { }

  createHeader() {
    return { 
      headers: new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
    }
  }

  getSubjects() {
    this.apiUrl = this.apiUrlBase + this.apiVersionPrefix + '/subject';
    return this.http.get<Subject[]>(this.apiUrl, this.createHeader());
  }

  getSubjectByID(subjectid: string) {
    this.apiUrl = this.apiUrlBase + this.apiVersionPrefix + '/subject/' + subjectid;
    return this.http.get<Subject>(this.apiUrl, this.createHeader());
  }

  getLessonsForSubject(subjectid: string) {
    this.apiUrl = this.apiUrlBase + this.apiVersionPrefix + '/subject/' + subjectid + '/lesson';
    return this.http.get<Lesson[]>(this.apiUrl, this.createHeader());
  }

  getLessonByID(lessonid: string) {
    this.apiUrl = this.apiUrlBase + this.apiVersionPrefix + '/lesson/' + lessonid;
    return this.http.get<Lesson>(this.apiUrl, this.createHeader());
  }
  
  getLessonOccurrences(lessonid: string, num: number) {
    this.apiUrl = this.apiUrlBase + this.apiVersionPrefix + '/occurrences/past/' + lessonid + '/' + num;
    return this.http.get<LessonOccurence[]>(this.apiUrl, this.createHeader());
  }

  getQueueForLesson(lessonid: string, num: number) {
    this.apiUrl = this.apiUrlBase + this.apiVersionPrefix + '/occurrences/next/' + lessonid + '/' + num;
    return this.http.get<Lesson[]>(this.apiUrl, this.createHeader());
  }

  getUsersForLesson(lessonid: string) {
    this.apiUrl = this.apiUrlBase + this.apiVersionPrefix + '/lesson/' + lessonid + '/users';
    return this.http.get<User[]>(this.apiUrl, this.createHeader()); 
  }


}

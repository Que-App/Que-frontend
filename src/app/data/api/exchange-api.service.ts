import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Globals } from '../../globals';

@Injectable({
  providedIn: 'root'
})
export class ExchangeApiService {

  constructor(
    private http: HttpClient,
    private globals: Globals,
  ) { }

  submitRequest(fromUserId: number, fromLessonId: number, fromDate: string, toUserId: number, toLessonId: number, toDate: string) {
    const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/submit`;
    return this.http.post(requestUrl, {fromUserId, fromLessonId, fromDate, toUserId, toLessonId, toDate})
  }
}

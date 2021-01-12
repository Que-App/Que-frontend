import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Globals } from '../../globals';
import { ExchangeRequest } from '../entities/exchangeRequest'

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
    return this.http.post(requestUrl, {fromUserId, fromLessonId, fromDate, toUserId, toLessonId, toDate});
  }

  getRequestToUser() {
    const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/to`;
    return this.http.get<ExchangeRequest[]>(requestUrl);
  }

  acceptRequest(requestId: number) {
    const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/accept/${requestId}`;
    return this.http.get(requestUrl); 
  }

  declineRequest(requestId: number) {
    const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/decline/${requestId}`;
    return this.http.get(requestUrl); 
  }
}

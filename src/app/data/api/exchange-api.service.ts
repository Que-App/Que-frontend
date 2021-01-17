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

  submitRequest(fromUserId: number, fromLessonId: number, fromIndex: number, toUserId: number, toLessonId: number, toIndex: number) {
    const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/submit`;
    return this.http.post(requestUrl, {fromUserId, fromLessonId, fromIndex, toUserId, toLessonId, toIndex}, {observe: 'response'});
  }

  getRequestsToUser() {
    const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/to`;
    return this.http.get<ExchangeRequest[]>(requestUrl);
  }

  getRequestsFromUser() {
    const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/from`;
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

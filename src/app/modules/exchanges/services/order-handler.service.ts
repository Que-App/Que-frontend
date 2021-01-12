import { Injectable } from '@angular/core';
import { ExchangeRequest, RequestStatus } from 'src/app/data/entities/exchangeRequest';

@Injectable({
  providedIn: 'root'
})
export class OrderHandlerService {

  constructor() { }

  orderByResolvmentDate(requests: ExchangeRequest[]) {
    return requests.sort((a,b) => new Date(b.resolvementDate).getTime() - new Date(a.resolvementDate).getTime());
  }

  setPendingFirst(requests: ExchangeRequest[]) {
    let pendingQueue = requests.filter(request => request.status === RequestStatus.PENDING);
    let queueWithoutPending = this.orderByResolvmentDate(requests.filter(request => request.status !== RequestStatus.PENDING));

    return pendingQueue.concat(queueWithoutPending);

  }
}

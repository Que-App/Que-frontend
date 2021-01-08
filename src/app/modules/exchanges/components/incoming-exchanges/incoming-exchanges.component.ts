import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject as rxSubject, Subscription } from 'rxjs';
import { ExchangeApiService } from 'src/app/data/api/exchange-api.service';
import { ExchangeRequest, RequestStatus } from 'src/app/data/entities/exchangeRequest';

@Component({
  selector: 'app-incoming-exchanges',
  templateUrl: './incoming-exchanges.component.html',
  styleUrls: ['./incoming-exchanges.component.scss']
})
export class IncomingExchangesComponent implements OnInit, OnDestroy {
  navPathList: string[] = ['home', 'exchanges', 'incoming'];
  options: string[] = [RequestStatus.ALL, RequestStatus.PENDING, RequestStatus.ACCEPTED, RequestStatus.DECLINED, RequestStatus.INVALID];
  
  allRequests: ExchangeRequest[] = [];
  allRequestsChange: rxSubject<ExchangeRequest[]> = new rxSubject<ExchangeRequest[]>();
  
  filteredRequests: ExchangeRequest[] = [];

  private subscription: Subscription

  constructor(
    private exchangeApi: ExchangeApiService
  ) { }

  ngOnInit(): void {
    this.fetchRequests();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchRequests() {
    this.subscription = this.exchangeApi.getRequestToUser().subscribe(requests => {
      this.allRequests = requests;
      this.allRequestsChange.next(this.allRequests);
    });
  }

  setFilteredRequests(requests: ExchangeRequest[]) {
    this.filteredRequests = requests;
  }

}

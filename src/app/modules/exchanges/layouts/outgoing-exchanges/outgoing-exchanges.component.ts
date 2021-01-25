import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReplaySubject, Subscription } from 'rxjs';
import { ExchangeApiService } from 'src/app/data/api/exchange-api.service';
import { ExchangeRequest } from 'src/app/data/entities/exchangeRequest';
import { ActiveNavElement } from 'src/app/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-outgoing-exchanges',
  templateUrl: './outgoing-exchanges.component.html',
  styleUrls: ['./outgoing-exchanges.component.scss']
})
export class OutgoingExchangesComponent implements OnInit, OnDestroy {
  activeNavElement: ActiveNavElement = ActiveNavElement.EXCHANGE_OUTGOING;
  exchangeNavIcon: string = 'outgoingRequests';
  requestType: string = 'outgoing';
  
  allRequests: ExchangeRequest[];
  allRequestsChange: ReplaySubject<ExchangeRequest[]> = new ReplaySubject<ExchangeRequest[]>();
  
  filteredRequests: ExchangeRequest[] = [];

  private subscription: Subscription;

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
    this.subscription = this.exchangeApi.getRequestsFromUser().subscribe(requests => {
      this.allRequests = requests;
      this.allRequestsChange.next(requests);
    });
  }

  setFilteredRequests(requests: ExchangeRequest[]) {
    this.filteredRequests = requests;
  }
}

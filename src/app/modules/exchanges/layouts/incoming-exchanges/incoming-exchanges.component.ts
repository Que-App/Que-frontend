import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReplaySubject, Subscription } from 'rxjs';
import { ExchangeApiService } from 'src/app/data/api/exchange-api.service';
import { ExchangeRequest } from 'src/app/data/entities/exchangeRequest';
import { ActiveNavElement } from 'src/app/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-incoming-exchanges',
  templateUrl: './incoming-exchanges.component.html',
  styleUrls: ['./incoming-exchanges.component.scss']
})
export class IncomingExchangesComponent implements OnInit, OnDestroy {
  activeNavElement: ActiveNavElement = ActiveNavElement.EXCHANGE_INCOMING;
  exchangeNavIcon: string = 'incomingRequests';
  requestType: string = 'incoming';
  
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
    this.subscription = this.exchangeApi.getRequestsToUser().subscribe(requests => {
      this.allRequests = requests;
      this.allRequestsChange.next(requests);
    });
  }

  setFilteredRequests(requests: ExchangeRequest[]) {
    this.filteredRequests = requests;
  }

}

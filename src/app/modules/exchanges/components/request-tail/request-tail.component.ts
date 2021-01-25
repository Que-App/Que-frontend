import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

import { ExchangeApiService } from 'src/app/data/api/exchange-api.service';
import { ExchangeRequest, RequestStatus } from 'src/app/data/entities/exchangeRequest';

@Component({
  selector: 'app-request-tail',
  templateUrl: './request-tail.component.html',
  styleUrls: ['./request-tail.component.scss']
})
export class RequestTailComponent implements OnInit {
  @Input('request') request: ExchangeRequest;
  @Input('requestType') requestType: string;
  person: string;
  position: TooltipPosition = 'right';

  constructor(
    private exchangeApi: ExchangeApiService
  ) { }

  ngOnInit(): void {
    this.person = this.requestType === 'incoming' ? 'Sender' : 'Receiver';
  }


  acceptRequest(requestId: number) {
    this.exchangeApi.acceptRequest(requestId).subscribe(() => window.location.reload());
  }

  declineRequest(requestId: number) {
    this.exchangeApi.declineRequest(requestId).subscribe(() => window.location.reload());
  }

  getStatusColor(status: string) {
    switch(status) {
      case RequestStatus.ACCEPTED: return 'darkgreen'; 
      case RequestStatus.DECLINED: return '#C13745'; 
      case RequestStatus.PENDING: return 'grey'; 
      case RequestStatus.INVALID: return 'orange'; 
    }
  }
}

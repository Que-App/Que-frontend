import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchanges-navbar',
  templateUrl: './exchanges-navbar.component.html',
  styleUrls: ['./exchanges-navbar.component.scss']
})
export class ExchangesNavbarComponent implements OnInit {
  @Input('activeIcon') activeIcon: string; 

  position: TooltipPosition = 'right';

  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
   this.changeIconColor();
  }

  changeIconColor() {
    switch(this.activeIcon) {
      case 'sendRequest': this.elementRef.nativeElement.querySelector('#send-request-icon').style.color = '$secondcolor'; break;
      case 'incomingRequests': this.elementRef.nativeElement.querySelector('#incoming-requests-icon').style.color = '$secondcolor'; break;
      case 'allRequests': this.elementRef.nativeElement.querySelector('#all-requests-icon').style.color = '$secondcolor'; break;
      case 'outgoingRequests': this.elementRef.nativeElement.querySelector('#outgoing-requests-icon').style.color = '$secondcolor'; break;
    }
  }

  routeTo(link: string) {
    this.router.navigateByUrl(link);
  }

}

import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { SnackBarHandlerService } from 'src/app/shared/services/snack-bar-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MobileBlockerService implements CanActivate {
    private isSmallScreen: boolean = this.breakpointObserver.isMatched('(max-width: 599px)');
    private isMediumScreen: boolean = this.breakpointObserver.isMatched('(max-width: 1279px)');


  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private snackBar: SnackBarHandlerService
  ) {}
  
    canActivate(): boolean {
    if (this.isSmallScreen) {
      this.router.navigateByUrl('/mobile-block');
      return false;
    } else if (this.isMediumScreen && sessionStorage.getItem('firstVisit') == null) {
      this.snackBar.openNoClosingErrorSnackBar('You may encounter some issues with user interface on you screen size. We are working to fix it, we apologise for inconvinience.');
      sessionStorage.setItem('firstVisit', 'false');
      return true;
    }
    return true;
  }


}

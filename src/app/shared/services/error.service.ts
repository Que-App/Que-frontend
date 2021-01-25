import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

import { SnackBarHandlerService } from './snack-bar-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {

  constructor(
    private snackBar: SnackBarHandlerService
  ) { }

  handleError(error: any) {
    console.error(error);
    if (Error instanceof HttpErrorResponse) {
      this.snackBar.openErrorSnackBar('Sorry, something went wrong.');
      console.error(error);
    } else {
      if (error.status != 401) {
        this.snackBar.openErrorSnackBar(error.error.message);
        console.error(error);
      }
    }
  }
}

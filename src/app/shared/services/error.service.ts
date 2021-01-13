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
    if (Error instanceof HttpErrorResponse) {
      this.snackBar.openErrorSnackBar(error.error.message);
    } else {
      this.snackBar.openErrorSnackBar(error.message);
      console.log(error.message);
    }

  }
}

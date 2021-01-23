import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarHandlerService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  openBasicSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['basic-snackbar']
    })
  }

  openErrorSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar']
    })
  }

  openNoClosingErrorSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 0,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar']
    })
  }
}

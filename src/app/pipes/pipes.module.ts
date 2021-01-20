import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourPrinterPipe } from './hour-printer.pipe';



@NgModule({
  declarations: [HourPrinterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HourPrinterPipe,
  ]
})
export class PipesModule {}

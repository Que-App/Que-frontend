import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileBlockerComponent } from './components/mobile-blocker/mobile-blocker.component';



@NgModule({
  declarations: [MobileBlockerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MobileBlockerComponent
  ]
})
export class MobileBlockerModule { }

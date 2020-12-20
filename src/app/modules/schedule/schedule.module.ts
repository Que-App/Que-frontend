import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module'

import { ScheduleComponent } from './components/schedule/schedule.component';
import { SelectorComponent } from './components/selector/selector.component'

@NgModule({
  declarations: [ScheduleComponent, SelectorComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ScheduleComponent
  ]
})
export class ScheduleModule { }

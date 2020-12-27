import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module'

import { ScheduleComponent } from './components/schedule/schedule.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    ScheduleComponent
  ]
})
export class ScheduleModule { }

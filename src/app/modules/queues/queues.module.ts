import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './layouts/queue/queue.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { OccurrenceTailComponent } from './components/occurrence-tail/occurrence-tail.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [QueueComponent, OccurrenceTailComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PipesModule
  ]
})
export class QueuesModule { }

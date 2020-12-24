import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatCardModule,
  ]
})
export class MaterialModule {}
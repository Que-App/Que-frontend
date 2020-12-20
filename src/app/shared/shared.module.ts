import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { SelectorComponent } from './components/selector/selector.component';
import { TileComponent } from './components/tile/tile.component';


@NgModule({
  declarations: [NavbarComponent, SelectorComponent, TileComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    TileComponent
  ]
})
export class SharedModule { }

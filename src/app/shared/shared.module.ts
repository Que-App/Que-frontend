import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { NavbarPathConverterPipe } from './pipes/navbar-path-converter.pipe';


@NgModule({
  declarations: [NavbarComponent, NavbarPathConverterPipe],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
  ],
  providers: [
    NavbarPathConverterPipe
  ]
})
export class SharedModule { }

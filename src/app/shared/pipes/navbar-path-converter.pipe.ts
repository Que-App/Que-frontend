import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navbarPathConverter'
})
export class NavbarPathConverterPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'incoming':  return '/exchanges/incoming';
      case 'outgoing':  return '/exchanges/outgoing';
      default:          return value;
    }
  }

}

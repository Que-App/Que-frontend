import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourPrinter'
})
export class HourPrinterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let stringArray = value.split(':');
    return stringArray[0] + ':' + stringArray[1];
  }

}

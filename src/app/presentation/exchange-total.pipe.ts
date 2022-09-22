import {Pipe, PipeTransform} from '@angular/core';

export function precisionRound(number: number, precision: number): number {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

@Pipe({
  name: 'exchangeTotal'
})
export class ExchangeTotalPipe implements PipeTransform {

  transform(currency: number | null, ruble: number | null): number | string {
    if (currency && ruble) {
      const sum: number = currency * ruble;
      return precisionRound(sum, 2);
    } else {
      return '';
    }
  }

}

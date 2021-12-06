import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({ name: 'addTax' })
export class AddTaxPipe implements PipeTransform {
  @memo()
  transform(price: number): number {
    console.log('add tax called');
    return price + price * 0.08;
  }
}

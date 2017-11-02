import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Round'
})
export class RoundPipe implements PipeTransform {

  transform(number: number): number {
    return Math.ceil(number);
  }

}

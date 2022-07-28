import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showless'
})
export class ShowlessPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    return value.split("").slice(0, value.length - 30).join("");
  }

}

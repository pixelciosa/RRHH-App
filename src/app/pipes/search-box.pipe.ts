import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(value: any, term: string): any {
    return value.filter((item) => item.nombre.match(term));
  }

}

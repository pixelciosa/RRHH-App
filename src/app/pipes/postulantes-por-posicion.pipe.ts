import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postulantesPorPosicion',
  pure: false

})
export class PostulantesPorPosicionPipe implements PipeTransform {

  transform(items: any, filterargs: any): any {
    if (!items) {
            return console.log("Sin resultados");
        }
        return items.filter(item => item.puesto == filterargs);
    }

}

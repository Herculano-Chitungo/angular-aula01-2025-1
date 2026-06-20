import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classPorValor',
  standalone: true
})
export class ClassPorValorPipe implements PipeTransform {

  public transform(valor: number): string {
    if (+valor.toFixed(2) > 0) {
      return 'positivo';
    } else if (+valor.toFixed(2) < 0) {
      return 'negativo';
    } else {
      return '';
    }
  }

}

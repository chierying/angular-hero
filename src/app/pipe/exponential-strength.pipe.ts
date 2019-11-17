import {Pipe, PipeTransform} from '@angular/core';

/**
 * 一个自定义管道：放大英雄能力
 */
@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: any, exponent?: number): any {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}

import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {SuperHeroService} from './super-hero.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

/**
 * 这是一个异步验证器：验证第二人格没有被使用。
 * 当触发表单验证时，会调用异步验证方法，通常会从服务端查询验证。
 */
@Directive({
  selector: '[appUniqueAlterEgo]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueAlterEgoValidatorDirective, multi: true}]
})
export class UniqueAlterEgoValidatorDirective implements AsyncValidator {

  constructor(private superHeroService: SuperHeroService) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.superHeroService.isAlterEgoTaken(control.value).pipe(
      map<boolean, any>(isTaken => isTaken ? {uniqueAlterEgo: true} : null),
      // 发生错误时返回空（也就意味着判定验证通过了。）
      catchError(_ => null)
    );
  }


}

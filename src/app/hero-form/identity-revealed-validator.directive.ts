import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

/**
 * 自定义跨字段交叉验证器:
 * 验证英雄名字和第二人格不能相同。
 */
@Directive({
  selector: '[appIdentityRevealed]',
  providers: [{provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true}]
})

export class IdentityRevealedValidatorDirective implements Validator {

  constructor() {
  }

  /**
   * 比较2个表单值是否相同
   * @param control 这里是FormGroup, 2个待验证表单的共同父组件。
   */
  validate(control: AbstractControl): ValidationErrors | null {
    const name = control.get('name');
    const alterEgo = control.get('alterEgo');
    return name && alterEgo && name.value === alterEgo.value ? {identityRevealed: true} : null;
  }

}

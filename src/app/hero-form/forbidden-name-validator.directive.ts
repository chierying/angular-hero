import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

/**
 * 自定义验证器指令：禁止使用特定名字。
 */
@Directive({
  // 选择器的名字可以改一下，去掉Validator。
  selector: '[appForbiddenName]',
  /**
   * 用 useExisting 而不是 useClass 来实例化：
   * useExisting: 注册的验证器必须是这个 ForbiddenValidatorDirective 实例本身，也就是表单中 forbiddenName 属性被绑定到了"bob"的那个。
   * 如果用 useClass 来代替 useExisting，就会注册一个新的类实例，而它是没有 forbiddenName 的。
   */
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true}]
})
export class ForbiddenNameValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  constructor() {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    // 如果没有定义禁用名，则通过验证。
    if (!this.forbiddenName) {
      return null;
    }

    // 正则匹配下表单值，如果匹配了，就返回错误信息。
    if (new RegExp(this.forbiddenName, 'i').test(control.value)) {
      console.log('表单验证未通过');
      return {forbiddenName: {value: control.value}};
    }
  }

}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExponentialStrengthPipe} from './pipes/exponential-strength.pipe';
import {ForbiddenNameValidatorDirective} from './validators/forbidden-name-validator.directive';
import {IdentityRevealedValidatorDirective} from './validators/identity-revealed-validator.directive';
import {UniqueAlterEgoValidatorDirective} from './validators/unique-alter-ego-validator.directive';
import {HighlightDirective} from './directives/highlight.directive';
import {UnlessDirective} from './directives/unless.directive';
import {FormsModule} from '@angular/forms';
import { ComposeMessageComponent } from './compose-message/compose-message.component';


/**
 * 共享模块，包含：通用组件，指令，验证器，管道。
 */
@NgModule({
  declarations: [
    ExponentialStrengthPipe,
    ForbiddenNameValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    HighlightDirective,
    UnlessDirective,
    ComposeMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    /**
     * 通过重新导出 CommonModule 和 FormsModule，任何导入了这个 SharedModule 的其它模块，
     * 就都可以访问来自 CommonModule 的 NgIf 和 NgFor 等指令了，也可以绑定到来自 FormsModule 中的 [(ngModel)] 的属性了。
     */
    CommonModule,
    FormsModule,
    /**
     * 导出共享资源
     */
    ExponentialStrengthPipe,
    ForbiddenNameValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    HighlightDirective,
    UnlessDirective
  ]

})
export class SharedModule {
}

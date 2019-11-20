import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PracticeRoutingModule} from './practice-routing.module';
import {CustomPipeComponent} from './custom-pipe/custom-pipe.component';
import {DirectiveComponent} from './directive/directive.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {ForbiddenNameValidatorDirective} from './forbidden-name-validator.directive';
import {IdentityRevealedValidatorDirective} from './identity-revealed-validator.directive';
import {UniqueAlterEgoValidatorDirective} from './unique-alter-ego-validator.directive';
import {RxjsComponent} from './rxjs/rxjs.component';
import {HighlightDirective} from './highlight.directive';
import {UnlessDirective} from './unless.directive';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CustomPipeComponent,
    DirectiveComponent,
    HeroFormComponent,
    RxjsComponent,
    ExponentialStrengthPipe,
    ForbiddenNameValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    HighlightDirective,
    UnlessDirective
  ],
  exports: [
    ForbiddenNameValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    UnlessDirective,
    ExponentialStrengthPipe,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PracticeRoutingModule,
  ]
})
export class PracticeModule {
}

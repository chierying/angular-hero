import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PracticeRoutingModule} from './practice-routing.module';
import {CustomPipeComponent} from './custom-pipe/custom-pipe.component';
import {DirectiveComponent} from './directive/directive.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomPipeComponent,
    DirectiveComponent,
    HeroFormComponent,
    RxjsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    PracticeRoutingModule,
  ]
})
export class PracticeModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsComponent} from './rxjs/rxjs.component';
import {DirectiveComponent} from './directive/directive.component';
import {CustomPipeComponent} from './custom-pipe/custom-pipe.component';
import {HeroFormComponent} from './hero-form/hero-form.component';


const routes: Routes = [
  {path: 'rxjs', component: RxjsComponent},
  {path: 'directive', component: DirectiveComponent},
  {path: 'customPipe', component: CustomPipeComponent},
  {path: 'heroForm', component: HeroFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule {
}

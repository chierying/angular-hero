import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HerosComponent} from './heros/heros.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {RxjsComponent} from './rxjs/rxjs.component';

// 配置路由
const routes: Routes = [
  // 添加这样一个完全匹配的"空路由"来匹配主页。并重定向到需要的路由
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HerosComponent},
  // path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id。
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'rxjs', component: RxjsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

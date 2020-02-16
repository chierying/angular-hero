import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroListComponent} from './heros-list/hero-list.component';


const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
    // 定义子路由，子路由会默认使用父路由组件的rout-outlet出口。
    children: [
      {path: 'hero-list', component: HeroListComponent},
      // path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id。
      {path: 'detail/:id', component: HeroDetailComponent},
      {path: 'dashboard', component: DashboardComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
}

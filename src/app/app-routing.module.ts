import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComposeMessageComponent} from './shared/compose-message/compose-message.component';

// 配置路由
const routes: Routes = [
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  // 惰性加载的模块
  {path: 'lazyLoad', loadChildren: () => import('./lazy-load/lazy-load.module').then(m => m.LazyLoadModule)},
  // 添加这样一个完全匹配的"空路由"来匹配主页。并重定向到需要的路由
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // 啥也没匹配到的时候 404
  {path: '**', redirectTo: 'dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true} // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

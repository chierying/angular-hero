import {NgModule} from '@angular/core';

import {HeroesRoutingModule} from './heroes-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroListComponent} from './heros-list/hero-list.component';
import {MessagesComponent} from './messages/messages.component';
import {SharedModule} from '../shared/shared.module';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroesComponent} from './heroes.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroListComponent,
    MessagesComponent,
    CrisisListComponent,
    HeroesComponent,
  ],
  imports: [
    SharedModule,
    HeroesRoutingModule,
  ]
})
export class HeroesModule {
}

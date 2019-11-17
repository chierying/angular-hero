import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HerosComponent} from './heros/heros.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './service/in-memory-data.service';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {DirectiveComponent} from './directive/directive.component';
import {HighlightDirective} from './directive/highlight.directive';
import {UnlessDirective} from './directive/unless.directive';
import {ExponentialStrengthPipe} from './pipe/exponential-strength.pipe';
import {CustomPipeComponent} from './custom-pipe/custom-pipe.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {ForbiddenNameValidatorDirective} from './hero-form/forbidden-name-validator.directive';
import { IdentityRevealedValidatorDirective } from './hero-form/identity-revealed-validator.directive';
import { UniqueAlterEgoValidatorDirective } from './hero-form/unique-alter-ego-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RxjsComponent,
    HeroSearchComponent,
    DirectiveComponent,
    HighlightDirective,
    UnlessDirective,
    ExponentialStrengthPipe,
    CustomPipeComponent,
    HeroFormComponent,
    ForbiddenNameValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

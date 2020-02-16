import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyLoadComponent } from './lazy-load.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [LazyLoadComponent],
  imports: [
    SharedModule,
    LazyLoadRoutingModule
  ]
})
export class LazyLoadModule { }

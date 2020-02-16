import {Component, OnInit} from '@angular/core';
import {SuperHeroService} from '../practice/super-hero.service';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.css']
})
export class LazyLoadComponent implements OnInit {

  constructor(
    private superHeroService: SuperHeroService
  ) {
  }

  ngOnInit() {
    this.superHeroService.isAlterEgoTaken('Tom').subscribe(value => console.log(value));
  }

}

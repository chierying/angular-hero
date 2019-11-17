import {Component, OnInit} from '@angular/core';
import {HeroService} from '../service/hero.service';
import {Observable, Subject} from 'rxjs';
import {Hero} from '../entity/hero';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // 间隔小于300ms
      debounceTime(300),
      // 排除重复的，直到有新的数据。
      distinctUntilChanged(),
      // 在新的元素到来时，忽略旧的。
      switchMap(term => this.heroService.searchHeroes(term))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }


}

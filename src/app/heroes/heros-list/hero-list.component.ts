import {Component, OnInit} from '@angular/core';
import {Hero} from '../services/hero';
import {HeroService} from '../services/hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedId: number;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getHeroes();
    this.selectedId = +this.route.snapshot.paramMap.get('id');
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(value => this.heroes = value);
  }

  add(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

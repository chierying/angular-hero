import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../services/hero';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroService} from '../services/hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  ngOnInit() {
    // 用+把字符串转换为数字
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }

  getHero(id: number) {
    this.heroService.getHero(id).subscribe(value => this.hero = value);
  }

  goBack() {
    // this.location.back();
    this.router.navigate(['/heroes/hero-list', {id: this.hero.id, foo: 'foo'}]);
  }

  save() {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}

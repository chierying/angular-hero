import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, combineLatest, from} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.combineLatest();
  }

  private combineLatest() {
    const arya = ['a1', 'a2', 'a3'];
    const aryb = ['b1', 'b2', 'b3'];
    const aryc = ['c1', 'c2', 'c3'];

    let bs = new BehaviorSubject(null);
    let fa = from(arya);
    let fb = from(aryb);
    let fc = from(aryc);

    fa.subscribe(value => bs.next(value));

    let filters = [bs.asObservable(), fb, fc];
    combineLatest(filters)
      .subscribe(x => console.log(x));
  }

  private obs2sub() {
    const subject = new BehaviorSubject<number>(null);

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    const observable = from([1, 2, 3]);

    observable.subscribe(subject); // You can subscribe providing a Subject
  }

}

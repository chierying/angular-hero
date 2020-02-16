import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, combineLatest, concat, from, fromEvent, interval, Observable, of, range, Subject, timer, zip} from 'rxjs';
import {bufferTime, concatMap, delay, distinctUntilChanged, map, scan, share, startWith, take, tap, withLatestFrom} from 'rxjs/operators';

interface Person {
  age: number,
  name: string
}


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    let numberObservable = interval(1000);
    let subject = new BehaviorSubject(0);
    numberObservable.subscribe(subject);

    subject.subscribe(value => console.log(value));

    timer(3000).subscribe(value => console.log(`current value: ` + subject.getValue()));

  }

  private share() {
    // 把定时器变成多播形式.
    let numberObservable = interval(1000).pipe(share());
    numberObservable.subscribe(i => console.log(`订阅者1: ${i}`));
    // 订阅者2晚1秒再订阅
    timer(1000).pipe(
      tap(_ => numberObservable.subscribe(i => console.log(`订阅者2: ${i}`)))
    ).subscribe();

    //  输出结果:  可以看到订阅者2 错过了元素0
    //  订阅者1: 0
    //  订阅者1: 1
    //  订阅者2: 1
    //  订阅者1: 2
    //  订阅者2: 2
    //  订阅者1: 3
    //  订阅者2: 3
  }

  private concatMap() {
    let clicks$ = fromEvent<MouseEvent>(document, 'click');
    clicks$.pipe(
      concatMap(e => interval(1000).pipe(take(4)))
    ).subscribe(n => console.log(n));
  }

  private bufferTime() {
    let nums$ = interval(1000);
    const buffered = nums$.pipe(bufferTime(1000, 3000,));
    buffered.subscribe(x => console.log(x));
  }

  private distinctUntilChanged() {
    of<Person>(
      {age: 4, name: 'Foo'},
      {age: 7, name: 'Bar'},
      {age: 5, name: 'Foo'},
      {age: 6, name: 'Foo'},
    ).pipe(
      distinctUntilChanged((x, y) => x.name === y.name)
    ).subscribe(person => console.log(person));
  }

  private zip() {
    const sourceOne = of('Hello');
    const sourceTwo = of('World!');
    const sourceThree = of('Goodbye');
    const sourceFour = of('World!');
    // 一直等到所有 observables 都发出一个值，才将所有值作为数组发出
    const example = zip(
      sourceOne,
      sourceTwo.pipe(delay(1000)),
      sourceThree.pipe(delay(2000)),
      sourceFour.pipe(delay(3000))
    );
    const subscribe = example.subscribe(val => console.log(val));
    // 输出: ["Hello", "World!", "Goodbye", "World!"]
  }

  private withLastFrom() {
    const clicks = fromEvent<MouseEvent>(document, 'click');
    const timer = interval(1000);
    const result = clicks.pipe(withLatestFrom(timer));
    result.subscribe(([event, n]) => console.log(`X坐标：${event.clientX},时间：${n}`));
  }

  private concatRepeat() {
    const timer = interval(1000).pipe(take(2));

    concat(timer, timer) // concatenating the same Observable!
      .subscribe(
        value => console.log(value),
        err => {
        },
        () => console.log('...and it is done!')
      );
  }

  private concatObs() {
    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));

    const result = concat(timer1, timer2, timer3);
    result.subscribe(x => console.log(x));
  }

  private concatTimer() {
    let timer = interval(1000).pipe(take(4));
    let sequence = range(1, 10);
    let result = concat(timer, sequence);
    result.subscribe(value => console.log(value));
  }

  /**
   * 计算一个人的BMI
   */
  private combineLatestBmi() {
    const weight = of(70, 72, 76, 79, 75);
    const height = of(1.76, 1.77, 1.78);
    let bmi = combineLatest(weight, height).pipe(
      // 这里使用了数组展开。
      map<number[], number>(([w, h]) => w / (h * h))
    );
    bmi.subscribe(value => console.log(`BMI is ${value}`));
  }

  private combineLatestAry() {
    let observables = [1, 5, 10].map(n => of(n)
      .pipe(
        delay(n * 1000), //先发出0，然后延迟n秒后发出n.
        startWith(0),
      )
    );

    let combined = combineLatest(observables);
    combined.subscribe(ary => console.log(ary));
  }

  private combineLatestTimer() {
    const firstTimer = timer(0, 1000);
    const secondTimer = timer(500, 1000);
    const combinedTimers = combineLatest(firstTimer, secondTimer);
    combinedTimers.subscribe(value => console.log(value));
  }

  private timer() {
    const numbers = timer(3000, 1000);
    numbers.subscribe(x => console.log(x));
  }

  /**
   * 操作符
   */
  private operators() {
    const observable = of(1, 2, 3, 4).pipe(
      map<number, number>(value => value * 10),
      map(value => value + 1)
    );

    observable.subscribe(
      value => console.log(value),
      error => null,
      () => console.log('done'));
  }

  private observableDemo() {
    // 创建Observable
    let observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        // Observable结束，结束之后不再发送值。
        subscriber.complete();
      }, 1000);
    });

    console.log('订阅之前！');


    // A观察者开始订阅    下面2种写法都可以，是subscribe方法的集中不同重载而已。
    observable.subscribe({
      next(x) {
        console.log('A获得值：' + x);
      },
      error(err) {
        console.log('A发生错误');
      },
      complete() {
        console.log('A结束！');
      }
    });

    // B观察者开始订阅
    observable.subscribe(
      value => console.log(`B获得值：${value}`),
      error => console.log('B发生错误！'),
      () => console.log('B结束！')
    );
  }

  private subjectDemo() {
    // 创建Subject，并通过泛型指定数据类型。
    const subject = new Subject<number>();

    // 订阅者A开始订阅
    subject.subscribe(value => console.log(`订阅者A得到：${value}`));

    // Subject发送数据。
    subject.next(1);
    subject.next(2);

    // 订阅者B开始订阅，此时订阅者B已经错过了1，2。将无法得到1，2
    subject.subscribe(value => console.log(`订阅者B得到：${value}`));

    subject.next(3);
    subject.next(4);
    subject.complete();
  }

  private behaviorSubjectDemo() {
    // 创建Subject，并通过泛型指定数据类型。
    const subject = new BehaviorSubject<number>(0);

    // 订阅者A开始订阅，可以拿到当前值。
    subject.subscribe(value => console.log(`订阅者A得到：${value}`));

    // Subject发送数据。
    subject.next(1);
    subject.next(2);

    // 订阅者B开始订阅，此时订阅者B已经错过了1，2。但可以拿到当前值。
    subject.subscribe(value => console.log(`订阅者B得到：${value}`));

    subject.next(3);
    subject.next(4);
    subject.complete();
  }

  /**
   * 点击次数统计
   */
  private documentClickCount() {
    fromEvent(document, 'click')
      .pipe(scan<any, number>(count => count + 1, 0))
      .subscribe(value => console.log(`点击了${value}次`));
  }

  private documentClick() {
    fromEvent(document, 'click')
      .subscribe(value => console.log('clicked!'));
  }

  private combineLatest() {
    const arya = ['a1', 'a2', 'a3'];
    const aryb = ['b1', 'b2', 'b3'];
    const aryc = ['c1', 'c2', 'c3'];

    let bs = new BehaviorSubject(' ');
    let fa = from(arya);
    let fb = from(aryb);
    let fc = from(aryc);

    fa.subscribe(bs);

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

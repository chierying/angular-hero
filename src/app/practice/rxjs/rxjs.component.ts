import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  messages: string[] = [];
  sub$ = new BehaviorSubject<string>('   ');

  constructor() {
  }

  ngOnInit() {
    console.log(this.sub$.getValue());

    this.sub$.next('fsdfasdf');
    console.log(this.sub$.getValue());
  }

  log(message: string) {
    this.messages.push(message);
  }

}

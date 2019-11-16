import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  messages: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  log(message: string) {
    this.messages.push(message);
  }

}

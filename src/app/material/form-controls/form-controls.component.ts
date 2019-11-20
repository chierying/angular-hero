import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-frm-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {
  hide: boolean;
  options = ['one', 'two', 'three'];
  foods = [
    'Apple',
    'Lafei',
    'Apple',
    'Banana',
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

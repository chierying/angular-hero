import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../message.service';
import {SuperHeroService} from '../../practice/super-hero.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private superHeroService: SuperHeroService
  ) {
  }

  ngOnInit() {
  }

}

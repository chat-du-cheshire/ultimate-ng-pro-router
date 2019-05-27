import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onActivate($event) { console.log('Activate -> ', $event); }
  onDeactivate($event) { console.log('Deactivate -> ', $event); }

}

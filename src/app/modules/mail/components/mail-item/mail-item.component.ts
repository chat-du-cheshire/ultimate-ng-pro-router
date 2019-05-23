import {Component, Input, OnInit} from '@angular/core';
import {IMail} from '../../interfaces/IMail';

@Component({
  selector: 'mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.scss']
})
export class MailItemComponent implements OnInit {

  @Input() message: IMail;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IMail} from '../../interfaces/IMail';

@Component({
  selector: 'mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {

  message$: Observable<IMail> = this.route.data.pipe(pluck('message'));

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}

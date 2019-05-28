import {Component, OnInit} from '@angular/core';
import {IMail} from '../../interfaces/IMail';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.scss']
})
export class MailFolderComponent implements OnInit {

  messages$: Observable<IMail[]> = this.route.data.pipe(pluck('messages'));
  title$: Observable<IMail[]> = this.route.params.pipe(pluck('name'));

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}

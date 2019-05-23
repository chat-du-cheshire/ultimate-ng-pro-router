import {Component, OnInit} from '@angular/core';
import {IMail} from '../../interfaces/IMail';

@Component({
  selector: 'mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.scss']
})
export class MailFolderComponent implements OnInit {

  messages: IMail[] = [{
    'id': 1,
    'folder': 'inbox',
    'from': 'Jane Smith',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus',
    'timestamp': 1487848162905
  }];

  constructor() {
  }

  ngOnInit() {
  }

}

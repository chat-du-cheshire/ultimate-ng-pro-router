import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {AuthService} from './modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ultimate-ng-pro-router';


  constructor(private router: Router, public auth: AuthService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(console.log);
  }

}

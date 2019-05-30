import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable()
export class AuthService {
  loggedIn = false;
  user = { isAdmin: false };
  checkPermissions() {
    return of(this.user.isAdmin);
  }
  isLoggedIn() {
    return of(this.loggedIn);
  }

  toggleLogin() {
    this.loggedIn = !this.loggedIn;
  }

  togglePermissions() {
    this.user.isAdmin = !this.user.isAdmin;
  }
}

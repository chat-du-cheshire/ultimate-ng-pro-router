import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IMail} from '../interfaces/IMail';
import {Observable} from 'rxjs';
import {MessagesService} from './messages.service';

@Injectable()
export class MessageResolver implements Resolve<IMail> {
  constructor(private message: MessagesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMail> {
    return this.message.get(route.params.id);
  }
}

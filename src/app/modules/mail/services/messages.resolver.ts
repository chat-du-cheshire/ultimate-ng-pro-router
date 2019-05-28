import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IMail} from '../interfaces/IMail';
import {Observable} from 'rxjs';
import {MessagesService} from './messages.service';

@Injectable()
export class MessagesResolver implements Resolve<IMail[]> {
  constructor(private messages: MessagesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMail[]> {
    const folder = route.params.name;
    return this.messages.getFolderMessages(folder);
  }
}

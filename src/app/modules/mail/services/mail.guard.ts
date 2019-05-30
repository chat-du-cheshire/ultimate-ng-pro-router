import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {MailViewComponent} from '../components/mail-view/mail-view.component';

@Injectable()
export class MailGuard implements CanDeactivate<MailViewComponent> {
  canDeactivate(component: MailViewComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    return component.hasUnsavedChanges ? window.confirm('Wanna quit ?!') : true;
  }
}

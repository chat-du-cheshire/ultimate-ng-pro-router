import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthGuard} from './modules/auth/services/auth.guard';

class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return (route.data || {}).preload ? fn() : of(null);
  }
}

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    data: {preload: true},
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: 'mail/folder/inbox'}
];

@NgModule({
  providers: [CustomPreload],
  imports: [RouterModule.forRoot(routes, {enableTracing: false, preloadingStrategy: CustomPreload})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

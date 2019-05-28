import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MailFolderComponent} from './components/mail-folder/mail-folder.component';
import {MessagesResolver} from './services/messages.resolver';
import {MessagesService} from './services/messages.service';

const routes: Routes = [
  {
    path: 'folder/:name', component: MailFolderComponent, resolve: {messages: MessagesResolver}
  }
];

@NgModule({
  declarations: [],
  providers: [MessagesService, MessagesResolver],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MailRoutingModule {
}

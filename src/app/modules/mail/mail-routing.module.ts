import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MailFolderComponent} from './components/mail-folder/mail-folder.component';
import {MessagesResolver} from './services/messages.resolver';
import {MessagesService} from './services/messages.service';
import {MailViewComponent} from './components/mail-view/mail-view.component';
import {MessageResolver} from './services/message.resolver';

const routes: Routes = [
  {
    path: 'folder/:name', component: MailFolderComponent, resolve: {messages: MessagesResolver}
  }, {
    path: 'messages/:id', component: MailViewComponent, outlet: 'pane', resolve: {message: MessageResolver}
  }
];

@NgModule({
  declarations: [],
  providers: [MessagesService, MessagesResolver, MessageResolver],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MailRoutingModule {
}

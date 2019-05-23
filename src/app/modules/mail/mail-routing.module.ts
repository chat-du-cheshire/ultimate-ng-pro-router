import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MailFolderComponent} from './components/mail-folder/mail-folder.component';

const routes: Routes = [
  { path: 'folder/:name', component: MailFolderComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MailRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './mail.component';
import {MailRoutingModule} from './mail-routing.module';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './components/mail-folder/mail-folder.component';

@NgModule({
  declarations: [MailComponent, MailItemComponent, MailFolderComponent],
  imports: [
    CommonModule,
    MailRoutingModule
  ],
  exports: [MailComponent]
})
export class MailModule { }

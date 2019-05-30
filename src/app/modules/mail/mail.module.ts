import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './mail.component';
import {MailRoutingModule} from './mail-routing.module';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './components/mail-folder/mail-folder.component';
import {HttpClientModule} from '@angular/common/http';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  declarations: [MailComponent, MailItemComponent, MailFolderComponent, MailViewComponent],
  imports: [
    CommonModule,
    AuthModule,
    HttpClientModule,
    MailRoutingModule
  ],
  exports: [MailComponent]
})
export class MailModule { }

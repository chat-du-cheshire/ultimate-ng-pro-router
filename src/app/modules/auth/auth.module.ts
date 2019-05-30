import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth.guard';

@NgModule({
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }

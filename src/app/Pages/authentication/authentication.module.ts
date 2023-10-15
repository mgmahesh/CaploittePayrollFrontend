import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule
  ]
})
export class AuthenticationModule { }

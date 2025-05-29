import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCallbackComponent } from './login-callback.component';
import { LoginCallbackRoutingModule } from './login-callback.routing';



@NgModule({
  declarations: [
    LoginCallbackComponent
  ],
  imports: [
    CommonModule,
    LoginCallbackRoutingModule
  ]
})
export class LoginCallbackModule { }

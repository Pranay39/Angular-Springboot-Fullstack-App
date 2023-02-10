import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';




@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  exports :[SignInComponent],
  imports: [
    CommonModule,
    FormsModule
  
   
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent, RegisterFormDialog  } from "./../register-form/register-form.component"
import { LoginFormComponent, LoginFormDialog } from './../login-form/login-form.component';
import { MaterialModule } from "./../material-module/material-module.module";
import { FormsModule } from '@angular/forms';
import { UsersService } from './../users.service';
import { AuthenticationService } from './../authentication.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, HttpModule],
  declarations: [RegisterFormComponent, RegisterFormDialog, LoginFormComponent, LoginFormDialog],
  exports: [RegisterFormComponent, FormsModule, LoginFormComponent, LoginFormDialog],
  providers: [UsersService, AuthenticationService],
  entryComponents: [RegisterFormDialog, LoginFormDialog]
})
export class PublicModule {}

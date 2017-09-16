import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent, RegisterFormDialog  } from "./../register-form/register-form.component";
import { MaterialModule } from "./../material-module/material-module.module";
import { FormsModule } from '@angular/forms';
import { UsersService } from './../users.service';
import { HttpModule } from '@angular/http';
import { MdDialogModule, MdSnackBarModule } from '@angular/material'


@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, HttpModule, MdDialogModule, MdSnackBarModule],
  declarations: [RegisterFormComponent, RegisterFormDialog],
  exports: [RegisterFormComponent, FormsModule],
  providers: [UsersService],
  entryComponents: [RegisterFormDialog]
})
export class PublicModule {}

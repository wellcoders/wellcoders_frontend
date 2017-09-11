import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from "./../register-form/register-form.component";
import { MaterialModule } from "./../material-module/material-module.module";
import { FormsModule } from '@angular/forms';
import { UsersService } from './../users.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, HttpModule],
  declarations: [RegisterFormComponent],
  exports: [RegisterFormComponent, FormsModule],
  providers: [UsersService]
})
export class PublicModule {}

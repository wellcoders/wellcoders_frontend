import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent, RegisterFormDialog  } from "./../register-form/register-form.component"
import { LoginFormComponent, LoginFormDialog } from './../login-form/login-form.component';
import { MaterialModule } from "./../material-module/material-module.module";
import { FormsModule } from '@angular/forms';
import { UtilsModule} from "./../utils-module/utils-module.module";
import { UsersService } from './../users.service';
import { AuthenticationService } from './../authentication.service';
import { HttpModule } from '@angular/http';
import { MdDialogModule, MdSnackBarModule } from '@angular/material';
import { LastestArticlesComponent } from "./../lastest-articles/lastest-articles.component";
import { AuthorArticlesComponent } from './../author-articles/author-articles.component';
import { CategoryArticlesComponent } from "./../category-articles/category-articles.component";
import { RecoveryFormComponent, RecoveryFormDialog } from './../recovery-form/recovery-form.component';



@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, HttpModule, MdDialogModule, MdSnackBarModule, UtilsModule],
  declarations: [RegisterFormComponent, RegisterFormDialog, LoginFormComponent, LoginFormDialog, LastestArticlesComponent, 
    AuthorArticlesComponent, CategoryArticlesComponent, RecoveryFormComponent, RecoveryFormDialog],
  exports: [RegisterFormComponent, FormsModule, LoginFormComponent, LoginFormDialog, LastestArticlesComponent, AuthorArticlesComponent, CategoryArticlesComponent],
  providers: [UsersService, AuthenticationService],
  entryComponents: [RegisterFormDialog, LoginFormDialog, RecoveryFormDialog]
})
export class PublicModule {}

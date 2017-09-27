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
import { LastArticlesComponent } from "./../last-articles/last-articles.component";
import { AuthorArticlesComponent } from './../author-articles/author-articles.component';


@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, HttpModule, MdDialogModule, MdSnackBarModule, UtilsModule],
  declarations: [RegisterFormComponent, RegisterFormDialog, LoginFormComponent, LoginFormDialog, LastArticlesComponent, 
    AuthorArticlesComponent],
  exports: [RegisterFormComponent, FormsModule, LoginFormComponent, LoginFormDialog, LastArticlesComponent, AuthorArticlesComponent],
  providers: [UsersService, AuthenticationService],
  entryComponents: [RegisterFormDialog, LoginFormDialog]
})
export class PublicModule {}

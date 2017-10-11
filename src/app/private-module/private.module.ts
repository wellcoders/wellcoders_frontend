import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./../material-module/material-module.module";
import { ArticleFormComponent } from './../article-form/article-form.component';
import { SettingsFormComponent } from './../settings-form/settings-form.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    CKEditorModule
  ],
  declarations: [
    ArticleFormComponent,
    SettingsFormComponent
  ],
  exports: [ArticleFormComponent]
})
export class PrivateModule { }

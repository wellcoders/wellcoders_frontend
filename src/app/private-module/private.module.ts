import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./../material-module/material-module.module";
import { ArticleFormComponent } from './../article-form/article-form.component';
import { SettingsFormComponent } from './../settings-form/settings-form.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { MediaService } from './../media.service'
import { DragelementDirective } from './../dragelement.directive'
import { DragitemComponent } from './../dragitem/dragitem.component';


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
    DragelementDirective,
    DragitemComponent,
    SettingsFormComponent
  ],
  exports: [ArticleFormComponent, DragelementDirective, DragitemComponent],
  providers: [MediaService]
})
export class PrivateModule { }

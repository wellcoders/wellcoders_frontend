import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderBarComponent } from "./../header-bar/header-bar.component";
import { ArticleListComponent } from "./../article-list/article-list.component";
import { ArticlePreviewComponent } from "./../article-preview/article-preview.component";
import { MaterialModule } from "./../material-module/material-module.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { ArticleService } from "./../article.service";

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  declarations: [
    HeaderBarComponent,
    ArticleListComponent,
    ArticlePreviewComponent
  ],
  exports: [HeaderBarComponent, ArticleListComponent, ArticlePreviewComponent],
  providers: [ArticleService]
})
export class UtilsModule {}

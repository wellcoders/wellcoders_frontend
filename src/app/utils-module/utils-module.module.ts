import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderBarComponent } from "./../header-bar/header-bar.component";
import { ArticleListComponent } from "./../article-list/article-list.component";
import { ArticlePreviewComponent } from "./../article-preview/article-preview.component";
import { MaterialModule } from "./../material-module/material-module.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PublicModule } from "./../public-module/public.module";
import { ArticleService } from "./../article.service";
import { CategoriesService } from './../categories.service';

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule, PublicModule],
  declarations: [
    HeaderBarComponent,
    ArticleListComponent,
    ArticlePreviewComponent
  ],
  exports: [HeaderBarComponent, ArticleListComponent, ArticlePreviewComponent],
  providers: [ArticleService, CategoriesService]
})
export class UtilsModule {}

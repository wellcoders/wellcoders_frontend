import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderBarComponent } from "./../header-bar/header-bar.component";
import { ArticleListComponent } from "./../article-list/article-list.component";
import { ArticlePreviewComponent } from "./../article-preview/article-preview.component";
import { MaterialModule } from "./../material-module/material-module.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PublicModule } from "./../public-module/public.module";
import { ArticleService } from "./../article.service";
import { FromNowPipe } from './../from-now.pipe';
import { BackendUriProvider } from './../settings';
import { ArticlesByAuthorComponent } from './../articles-by-author/articles-by-author.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule, PublicModule],
  declarations: [
    HeaderBarComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    FromNowPipe,
    ArticlesByAuthorComponent
  ],
  exports: [HeaderBarComponent, ArticleListComponent, ArticlePreviewComponent, FromNowPipe, ArticlesByAuthorComponent],
  providers: [ArticleService, BackendUriProvider]
})
export class UtilsModule {}

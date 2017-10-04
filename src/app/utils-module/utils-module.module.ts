import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderBarComponent } from "./../header-bar/header-bar.component";
import { ArticleListComponent } from "./../article-list/article-list.component";
import { ArticlePreviewComponent } from "./../article-preview/article-preview.component";
import { MaterialModule } from "./../material-module/material-module.module";
import { PaginateComponent } from "./../paginate/paginate.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ArticleService } from "./../article.service";
import { CategoriesService } from './../categories.service';
import { FromNowPipe } from "./../from-now.pipe";
import { RoundPipe } from "./../round.pipe";
import { AppearDirective } from "./../appear.directive";
import { ConfirmationDialog } from "./../confirmation-dialog/confirmation-dialog.component"

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  declarations: [
    HeaderBarComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    PaginateComponent,
    FromNowPipe,
    RoundPipe,
    AppearDirective,
    ConfirmationDialog
  ],
  exports: [
    HeaderBarComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    PaginateComponent,
    FromNowPipe,
    RoundPipe,
    
  ],
  entryComponents: [PaginateComponent, ConfirmationDialog],
  providers: [ArticleService, CategoriesService]
})
export class UtilsModule {}

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
import { ScrollService } from "./../scroll.service" ;
import { FromNowPipe } from "./../from-now.pipe";
import { RoundPipe } from "./../round.pipe";
import { AppearDirective } from "./../appear.directive";
import { ConfirmationDialog } from "./../confirmation-dialog/confirmation-dialog.component";
import { ArticleDetailComponent } from './../article-detail/article-detail.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { ArticleActionsBoxComponent } from './../article-actions-box/article-actions-box.component';
import { SlugifyPipe } from './../slugify.pipe';
import { NativeWindowProvider } from './../window';
import { ShareModule } from 'ng2share/share.module';
import { EmptyListComponent } from './../empty-list/empty-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule, ShareModule, AngularFontAwesomeModule],
  declarations: [
    HeaderBarComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    PaginateComponent,
    FromNowPipe,
    RoundPipe,
    AppearDirective,
    ConfirmationDialog,
    ArticleDetailComponent,
    NotFoundComponent,
    ArticleActionsBoxComponent,
    SlugifyPipe,
    EmptyListComponent
  ],
  exports: [
    HeaderBarComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    PaginateComponent,
    FromNowPipe,
    RoundPipe,
    ArticleDetailComponent,
    ArticleActionsBoxComponent,
    SlugifyPipe,
    AngularFontAwesomeModule
  ],
  entryComponents: [PaginateComponent, ConfirmationDialog],
  providers: [ArticleService, CategoriesService, SlugifyPipe, NativeWindowProvider, ScrollService]
})
export class UtilsModule {}

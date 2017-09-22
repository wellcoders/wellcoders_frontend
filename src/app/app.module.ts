import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { UtilsModule } from "./utils-module/utils-module.module";
import { PublicModule } from "./public-module/public.module";
import { PrivateModule } from "./private-module/private.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
// import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { ArticlesResolveService } from "./articles-resolve.service";

@NgModule({
  declarations: [
    AppComponent
    // ArticleDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule,
    PublicModule,
    PrivateModule,
    BrowserAnimationsModule
  ],
  providers: [ArticlesResolveService],
  bootstrap: [AppComponent]
})
export class AppModule {}

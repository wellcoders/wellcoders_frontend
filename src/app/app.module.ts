import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { UtilsModule } from "./utils-module/utils-module.module";
import { PublicModule } from "./public-module/public.module";
import { PrivateModule } from "./private-module/private.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { ArticlesResolveService } from "./articles-resolve.service";
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule,
    PublicModule,
    PrivateModule,
    BrowserAnimationsModule,
    NgProgressModule,
  ],
  providers: [ArticlesResolveService,  {provide: BrowserXhr, useClass: NgProgressBrowserXhr}],
  bootstrap: [AppComponent]
})
export class AppModule {}

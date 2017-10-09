import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LastestArticlesComponent } from "./../lastest-articles/lastest-articles.component";
import { RegisterFormComponent } from "./../register-form/register-form.component";
import { ArticlesResolveService } from "./../articles-resolve.service";
import { AuthorArticlesComponent } from "./../author-articles/author-articles.component";
import { CategoryArticlesComponent } from "./../category-articles/category-articles.component";
import { ArticleFormComponent } from './../article-form/article-form.component'
import { ArticleDetailComponent } from './../article-detail/article-detail.component'
import { NotFoundComponent } from './../not-found/not-found.component'
import { ArticleCommon } from './../article-common'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        component: LastestArticlesComponent,
        resolve: {
          articles: ArticlesResolveService
        }
      },
      {
        path: `404`, 
        component: NotFoundComponent
      },
      {
        path: ":username",
        component: AuthorArticlesComponent,
        resolve: {
          articles: ArticlesResolveService
        }
      },
      {
        path: `article/create`, 
        component: ArticleFormComponent
      },
      {
        path: `article/:articleid/edit`, 
        component: ArticleFormComponent,
        resolve: {
          articles: ArticlesResolveService
        }
      },
      {
        path: `article/:username/:titleslug`,
        component: ArticleDetailComponent,
        resolve: {
          articles: ArticlesResolveService
        }
      },
      {
        path: "tag/:categoryname",
        component: CategoryArticlesComponent,
        resolve: {
          articles: ArticlesResolveService
        }
      },
      {
        path: "**",
        redirectTo: "/articles"
      }
    ],
    { 
      //enableTracing: true,  
      errorHandler: ArticleCommon.errorHandler
    }
)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

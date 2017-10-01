import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LastArticlesComponent } from "./../last-articles/last-articles.component";
import { RegisterFormComponent } from "./../register-form/register-form.component";
import { ArticlesResolveService } from "./../articles-resolve.service";
import { AuthorArticlesComponent } from './../author-articles/author-articles.component';
import { ArticleFormComponent } from './../article-form/article-form.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "articles",
        component: LastArticlesComponent,
        resolve: {
          articles: ArticlesResolveService
        }
      },
      {
        path: ':username',
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
        path: "**",
        redirectTo: "/articles"
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

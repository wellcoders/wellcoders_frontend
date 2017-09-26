import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LastArticlesComponent } from "./../last-articles/last-articles.component";
import { RegisterFormComponent } from "./../register-form/register-form.component";
import { ArticlesResolveService } from "./../articles-resolve.service";
import { ArticlesByAuthorComponent } from './../articles-by-author/articles-by-author.component';

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
        path: ':username/articles',
        component: ArticlesByAuthorComponent,
        resolve: {
          posts: ArticlesResolveService
        }
      },
      // Para probar con dos urls, eliminar después
      {
        path: "register",
        component: RegisterFormComponent
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

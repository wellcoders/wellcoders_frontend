import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LastestArticlesComponent } from "./../lastest-articles/lastest-articles.component";
import { RegisterFormComponent } from "./../register-form/register-form.component";
import { ArticlesResolveService } from "./../articles-resolve.service";
import { AuthorArticlesComponent } from "./../author-articles/author-articles.component";
import { CategoryArticlesComponent } from "./../category-articles/category-articles.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "articles",
        component: LastestArticlesComponent,
        resolve: {
          articles: ArticlesResolveService
        }
      },
      {
        path: ":username/articles",
        component: AuthorArticlesComponent,
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
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

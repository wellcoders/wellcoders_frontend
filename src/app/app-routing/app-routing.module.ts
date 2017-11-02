import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LastestArticlesComponent } from "./../lastest-articles/lastest-articles.component";
import { RegisterFormComponent } from "./../register-form/register-form.component";
import { ArticlesResolveService } from "./../articles-resolve.service";
import { AuthorArticlesComponent } from "./../author-articles/author-articles.component";
import { CategoryArticlesComponent } from "./../category-articles/category-articles.component";
import { ArticleFormComponent } from "./../article-form/article-form.component";
import { ArticleDetailComponent } from "./../article-detail/article-detail.component";
import { NotFoundComponent } from "./../not-found/not-found.component";
import { ArticleCommon } from "./../article-common";
import { SettingsFormComponent } from "./../settings-form/settings-form.component";
import { SearchedArticlesComponent } from "./../searched-articles/searched-articles.component";
import { EmptyListComponent } from './../empty-list/empty-list.component';
import { ErrorComponent } from './../error/error.component'

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "",
          component: LastestArticlesComponent,
          resolve: {
            articles: ArticlesResolveService
          }
        },
        {
          path: `search`,
          component: SearchedArticlesComponent
        },
        {
          path: `empty`,
          component: EmptyListComponent
        },
        {
          path: `404`,
          component: NotFoundComponent
        },
        {
          path: `error`,
          component: ErrorComponent
        },
        {
          path: "articles",
          children:[
            {
              path: "",
              pathMatch: "full",
              redirectTo: "/"
            },
            {
              path: ":username",
              children: [
                {
                  path: '',
                  component: AuthorArticlesComponent,
                  resolve: {
                    articles: ArticlesResolveService
                  },
                },
                {
                  path: `:titleslug`,
                  children: [
                    {
                      path: '',
                      component: ArticleDetailComponent
                    },
                    {
                      path: `edit`,
                      component: ArticleFormComponent
                    },
                  ],
                  resolve: {
                    articles: ArticlesResolveService
                  }, 
                }
              ]
            }
          ]
        },
        {
          path: `article/create`,
          component: ArticleFormComponent
        },
        {
          path: "user",
          children: [
           {
            path: "",
            pathMatch: "full",
            redirectTo: "/user/settings"
           },
           {
             path: "settings",
             component: SettingsFormComponent,
           },
           {
             path: "new-article",
             component: ArticleFormComponent
           },
           {
             path: "articles/:status",
             component: AuthorArticlesComponent,
             resolve: {
              articles: ArticlesResolveService
            }             
           },
           {
            path: "favorites",
            component: AuthorArticlesComponent,
            resolve: {
              articles: ArticlesResolveService
            },
            data: { currentSelection: "FAV"}
          },
          ]
        },
        {
          path: "tag/:categoryname",
          component: CategoryArticlesComponent,
          resolve: {
            articles: ArticlesResolveService
          }
        },
        {
          path: ":username/:status",
          component: AuthorArticlesComponent,

        },
        {
          path: "**",
          redirectTo: "/"
        }
      ],

    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

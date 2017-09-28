import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ArticleWrapper } from "./article-wrapper";
import { Article } from "./article";
import { ArticleService } from "./article.service";

@Injectable()
export class ArticlesResolveService implements Resolve<ArticleWrapper> {
  constructor(private _articleService: ArticleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ArticleWrapper> {
    console.log('params', route.params.username);
    if (route.params['username']) {
      return this._articleService.getUserArticles(route.params['username']);
    } else {
      return this._articleService.getArticles();
    }
  }
}

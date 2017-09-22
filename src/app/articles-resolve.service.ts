import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Article } from "./article";
import { ArticleService } from "./article.service";

@Injectable()
export class ArticlesResolveService implements Resolve<Article[]> {
  constructor(private _articleService: ArticleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Article[]> {
    return this._articleService.getArticles();
  }
}

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
    let params = route.params;
    if (params.hasOwnProperty("categoryname")) {
      console.log("Recuperando artículos por categoria");
      return this._articleService.getCategoryArticles(params.categoryname);
    } else {
      console.log("Recuperando últimos artículos");
      return this._articleService.getArticles();
    }
  }
}

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
    debugger;
    if (route.url.length && route.url[0].path == "favorites") {
      return this._articleService.getFavoriteArticles();
    } else if (params.hasOwnProperty("username") && params.hasOwnProperty("titleslug")) {
      return this._articleService.getArticle(params.username, params.titleslug)
    } else if (params.hasOwnProperty("categoryname")) {
      return this._articleService.getCategoryArticles(params.categoryname);
    } else if (params.hasOwnProperty("username") && !params.hasOwnProperty("status")) {
      return this._articleService.getAuthorArticles(params.username);
    } else if (params.hasOwnProperty("username") && params.hasOwnProperty("status") && params.status === "drafts") {
      return this._articleService.getAuthorArticles(params.username, 1, "DRF");
    } else if (params.hasOwnProperty("username") && params.hasOwnProperty("status") && params.status === "deleted") {
      return this._articleService.getAuthorArticles(params.username, 1, "DEL");
    } else if (params.hasOwnProperty("articleid")) {
      return this._articleService.getArticleById(params.articleid);
    } else {
      return this._articleService.getArticles();
    }
  }
}

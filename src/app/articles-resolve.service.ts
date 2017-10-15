import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ArticleWrapper } from "./article-wrapper";
import { Article } from "./article";
import { ArticleService } from "./article.service";

@Injectable()
export class ArticlesResolveService implements Resolve<ArticleWrapper> {
  constructor(private _articleService: ArticleService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticleWrapper> {
    let params = route.params;
    let searchText = route.queryParams.q;

    if (!searchText && params.hasOwnProperty("username") && params.hasOwnProperty("titleslug")) {
      return this._articleService.getArticle(params.username, params.titleslug)
    } else if (!searchText && params.hasOwnProperty("articleid")) {
      return this._articleService.getArticleById(params.articleid);
    } else if (params.hasOwnProperty("categoryname")) {
      return this._articleService.getCategoryArticles(params.categoryname, searchText);
    } else if (params.hasOwnProperty("username") && !params.hasOwnProperty("status")) {
      return this._articleService.getAuthorArticles(params.username, searchText);
    } else if (params.hasOwnProperty("username") && params.hasOwnProperty("status") && params.status === "drafts") {
      return this._articleService.getAuthorArticles(params.username, searchText, 1, "DRF");
    } else if (params.hasOwnProperty("username") && params.hasOwnProperty("status") && params.status === "deleted") {
      return this._articleService.getAuthorArticles(params.username, searchText, 1, "DEL");
    }
    return this._articleService.getArticles(searchText);
  }

  /*
    } else if (params.hasOwnProperty("username") && !params.hasOwnProperty("status")) {
      return this._articleService.getAuthorArticles(params.username);
    } else if (params.hasOwnProperty("username") && params.hasOwnProperty("status") && params.status === "drafts") {
      return this._articleService.getAuthorArticles(params.username, 1, "DRF");
    } else if (params.hasOwnProperty("username") && params.hasOwnProperty("status") && params.status === "deleted") {
      return this._articleService.getAuthorArticles(params.username, 1, "DEL");

  */
}

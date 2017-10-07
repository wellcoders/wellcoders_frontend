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
    if (params.hasOwnProperty("username") && params.hasOwnProperty("titleslug")) {
      return this._articleService.getArticle(params.username, params.titleslug);
    } else if (params.hasOwnProperty("categoryname")) {
      return this._articleService.getCategoryArticles(params.categoryname);
    } else if (params.hasOwnProperty("username")) {
      return this._articleService.getAuthorArticles(params.username);
    } else if (params.hasOwnProperty("articleid")) {
      return this._articleService.getArticleById(params.articleid);
    } else {
      return this._articleService.getArticles();
    }
  }
}

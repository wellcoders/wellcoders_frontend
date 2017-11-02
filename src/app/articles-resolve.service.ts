import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'
import 'rxjs/Rx';
import { ArticleWrapper } from "./article-wrapper";
import { Article } from "./article";
import { ArticleService } from "./article.service";
import { ArticleCommon } from "./article-common"
import { SessionStorageHandler } from './local-storage-handler'

@Injectable()
export class ArticlesResolveService extends SessionStorageHandler implements Resolve<ArticleWrapper> {
  constructor(private _articleService: ArticleService, private _router: Router) {
    super();
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticleWrapper> {
    let params = route.params;
    let searchText = route.queryParams.q;

    if (!searchText && params.hasOwnProperty("username") && params.hasOwnProperty("titleslug")) {
      return this._articleService.getArticle(params.username, params.titleslug).catch(this.handleError);
    } else if (!searchText && params.hasOwnProperty("articleid")) {
      return this._articleService.getArticleById(params.articleid).catch(this.handleError);
    } else if (params.hasOwnProperty("categoryname")) {
      return this._articleService.getCategoryArticles(params.categoryname, searchText).catch(this.handleError);
    } else if (params.hasOwnProperty("username") && !params.hasOwnProperty("status")) {
      return this._articleService.getAuthorArticles(params.username, searchText).catch(this.handleError);
    } else if (this.user && params.hasOwnProperty("status")) {
      return this._articleService.getAuthorArticles(this.user.user.username, searchText, 1, ArticleCommon.statusValues[params.status])
      .catch(this.handleError);
    }
    return this._articleService.getArticles(searchText).catch(this.handleError);
  }

  handleError = (function(error: Response, caught: Observable<ArticleWrapper>) {
    if(error !== undefined) {
      if(error.status === 404) {
        this._router.navigate(["404"]);
      } else {
        this._router.navigate(["error"]);
      }
      return Observable.empty();
    }
  }).bind(this);
}

@Injectable()
export class FavoritesResolveService implements Resolve<ArticleWrapper> {
  constructor(private _articleService: ArticleService, private _router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticleWrapper> {
    let params = route.params;
    let searchText = route.queryParams.q;

    return this._articleService.getFavoriteArticles(searchText).catch(this.handleError);
  }
  handleError = (function(error: Response, caught: Observable<ArticleWrapper>) {
    if(error !== undefined) {
      if(error.status === 404) {
        this._router.navigate(["404"]);
      } else {
        this._router.navigate(["error"]);
      }
      return Observable.empty();
    }
  }).bind(this);
}

@Injectable()
export class DraftsResolveService implements Resolve<ArticleWrapper> {
  constructor(private _articleService: ArticleService, private _router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticleWrapper> {
    let params = route.params;
    let searchText = route.queryParams.q;

    return this._articleService.getFavoriteArticles(searchText).catch(this.handleError);
  }
  handleError = (function(error: Response, caught: Observable<ArticleWrapper>) {
    if(error !== undefined) {
      if(error.status === 404) {
        this._router.navigate(["404"]);
      } else {
        this._router.navigate(["error"]);
      }
      return Observable.empty();
    }
  }).bind(this);
}
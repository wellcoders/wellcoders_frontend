import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from './../environments/environment';
import { Article } from './article';
import { ArticleWrapper } from "./article-wrapper";
import { LocalStorageHandler } from "./local-storage-handler"

@Injectable()
export class ArticleService extends LocalStorageHandler{

  constructor(
    private _http: Http
  ) { super()}

  getArticles(page: number = 1): Observable<ArticleWrapper> {
    return this._http
      .get(environment.url + `/api/1.0/posts/?page=${page}`)
      .map((response: Response): ArticleWrapper =>
      ArticleWrapper.fromJson(response.json())
      );
  }

  getUserArticles(username: String, page: number = 1): Observable<ArticleWrapper> {
    return this._http
    .get(environment.url + `/api/1.0/${username}/posts/?page=${page}`)
    .map((response: Response): ArticleWrapper =>
    ArticleWrapper.fromJson(response.json())
    );
  }

  createArticle(article: Object): Observable<any> {
    
    let headers = new Headers();
    headers.append('Authorization', 'JWT ' + this.user.token);

    let options = new RequestOptions({ headers: headers });
    
    return this._http
      .post(environment.url + `/api/1.0/posts/`, article, options);
  }
}

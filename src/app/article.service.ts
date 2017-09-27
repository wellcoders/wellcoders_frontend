import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from './../environments/environment';
import { Article } from './article';
import { ArticleWrapper } from "./article-wrapper";
@Injectable()
export class ArticleService {

  constructor(
    private _http: Http
  ) { }

  getArticles(page: number = 1): Observable<ArticleWrapper> {
    return this._http
      .get(environment.url + `/api/1.0/posts/?page=${page}`)
      .map((response: Response): ArticleWrapper =>
      ArticleWrapper.fromJson(response.json())
      );
  }

  getUserArticles(username: String): Observable<Article[]> {
    return this._http
    .get(environment.url + `/api/1.0/${username}/posts`)
    .map((response: Response) =>
    Article.fromJsonToList(response.json())
    );
  }
}

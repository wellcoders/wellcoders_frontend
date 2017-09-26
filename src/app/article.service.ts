import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from './../environments/environment';
import { BackendUri } from './settings';
import { Article } from './article';
import { ArticleWrapper } from "./article-wrapper";
@Injectable()
export class ArticleService {

  constructor(
    private _http: Http,
    @Inject(BackendUri) private _backendUri) { }

  getArticles(page: number = 1): Observable<ArticleWrapper> {
    return this._http
      .get(environment.url + `/api/1.0/posts/?page=${page}`)
      .map((response: Response): ArticleWrapper =>
      ArticleWrapper.fromJson(response.json())
      );
  }

  getUserArticles(username: String): Observable<Article[]> {
    const search = new URLSearchParams();
    search.set('author.username', username.toString());
    search.set('_sort', 'publicationDate');
    search.set('_order', 'DESC');
    search.set('publicationDate_lte', new Date().getTime().toString());
    const options = new RequestOptions();
    options.search = search;
    return this._http
    .get(`${this._backendUri}/api/1.0/`, options)
    .map((response: Response) =>
    Article.fromJsonToList(response.json())
    );
  }
}

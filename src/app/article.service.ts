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
    console.log(`Obteniendo últimos artículos de la página ${page}`);
    return this._http
      .get(environment.url + `/api/1.0/posts/?page=${page}`)
      .map((response: Response): ArticleWrapper =>
      ArticleWrapper.fromJson(response.json())
      );
  }

  getCategoryArticles(category: string, page: number = 1): Observable<ArticleWrapper> {
    console.log(`Obteniendo artículos de la categoría ${category} de la página ${page}`);
    return this._http
      .get(environment.url + `/api/1.0/tag/${category}/?page=${page}`)
      .map((response: Response): ArticleWrapper =>
      ArticleWrapper.fromJson(response.json())
      );
  }

  getAuthorArticles(username: String, page: number = 1): Observable<ArticleWrapper> {
    console.log(`Obteniendo artículos del autor ${username} de la página ${page}`);
    return this._http
    .get(environment.url + `/api/1.0/${username}/?page=${page}`)
    .map((response: Response): ArticleWrapper =>
    ArticleWrapper.fromJson(response.json())
    );
  }
}

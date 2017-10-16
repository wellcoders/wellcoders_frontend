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

  default_status: string = "PUB";

  constructor(
    private _http: Http
  ) { super()}

  getArticles(searchText: string = "", page: number = 1): Observable<ArticleWrapper> {
    let headers = new Headers();
    if (this.user) {
      headers.append('Authorization', 'JWT ' + this.user.token);
    }
    let options = new RequestOptions({ headers: headers });
    console.log(`Obteniendo últimos artículos de la página ${page}. Search text: ${searchText}`);

    let queryString = this.getQueryString(page, searchText);
    return this._http
      .get(environment.url + `/api/1.0/posts/?${ queryString }`, options)
      .map((response: Response): ArticleWrapper =>
      ArticleWrapper.fromJson(response.json())
      );
  }

  getArticle(username: String, titleSlug: String): Observable<ArticleWrapper> {
    let headers = new Headers();
    if (this.user) {
      headers.append('Authorization', 'JWT ' + this.user.token);
    }
    let options = new RequestOptions({ headers: headers });

    return this._http
      .get(environment.url + `/api/1.0/posts/?username=${username}&title_slug=${titleSlug}`, options)
      .map((response: Response): ArticleWrapper =>
        ArticleWrapper.fromJson(response.json())
      );
  }

  getCategoryArticles(category: string, searchText: string = "", page: number = 1): Observable<ArticleWrapper> {
    console.log(`Obteniendo artículos de la categoría ${category} de la página ${page}. Search text: ${searchText}`);
    let queryString = this.getQueryString(page, searchText);
    return this._http
      .get(environment.url + `/api/1.0/tag/${category}/?${queryString}`)
      .map((response: Response): ArticleWrapper =>
      ArticleWrapper.fromJson(response.json())
      );
  }

  getAuthorArticles(username: String, searchText: string = "", page: number = 1, status: string = this.default_status): Observable<ArticleWrapper> {
    let headers = new Headers();
    if (this.user) {
      headers.append('Authorization', 'JWT ' + this.user.token);
    }
    let options = new RequestOptions({ headers: headers });
    console.log(`Obteniendo artículos del autor ${username} de la página ${page}. Search text: ${searchText}`);
    let queryString = this.getQueryString(page, searchText) + `&status=${status}`;
    return this._http
    .get(environment.url + `/api/1.0/${username}/?${queryString}`, options)
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

  updateArticle(article: Object): Observable<any> {
    
    let headers = new Headers();
    headers.append('Authorization', 'JWT ' + this.user.token);

    let options = new RequestOptions({ headers: headers });
    
    return this._http.put(environment.url + `/api/1.0/posts/` + article['pk'] + '/', article, options);
  }

  deleteArticle(article: Object): Observable<any> {
    
    let headers = new Headers();
    headers.append('Authorization', 'JWT ' + this.user.token);

    let options = new RequestOptions({ headers: headers });

    let patchData = {};
    patchData['pk'] = article['pk'];
    patchData['status'] = 'DEL'

    return this._http.patch(environment.url + `/api/1.0/posts/` + article['pk'] + '/', patchData, options);
  }

  getArticleById(id: number): Observable<any> {
    return this._http
      .get(environment.url + `/api/1.0/posts/`+ id + `/`);
  } 
  
  getQueryString(page: number, searchText: string): string {
    let queryString = `page=${page}`;
    if (searchText) {
      queryString += `&search=${searchText}`;
    }
    return queryString;
  }  

  favoriteClicked(article: Object): Observable<any> {
    
    let headers = new Headers();
    headers.append('Authorization', 'JWT ' + this.user.token);

    let options = new RequestOptions({ headers: headers });

    if(article['is_favorite']){
      return this._http.delete(environment.url + `/api/1.0/posts/` + article['pk'] + '/favorite/', options);
  
    }else{
      return this._http.post(environment.url + `/api/1.0/posts/` + article['pk'] + '/favorite/', '', options);
    }
  }  

  getFavoriteArticles(searchText: string = "",  page: number = 1): Observable<ArticleWrapper> {
    let headers = new Headers();
    headers.append('Authorization', 'JWT ' + this.user.token);

    let options = new RequestOptions({ headers: headers });

    let queryString = this.getQueryString(page, searchText);

    return this._http
    .get(environment.url + `/api/1.0/favorites/?${queryString}`, options)
    .map((response: Response): ArticleWrapper =>
    ArticleWrapper.fromJson(response.json())
    );
  }
}

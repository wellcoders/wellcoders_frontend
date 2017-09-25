import { Injectable } from "@angular/core";
import { Article } from "./article";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { environment } from "./../environments/environment";
import { ArticleWrapper } from "./article-wrapper";
@Injectable()
export class ArticleService {
  constructor(private _http: Http) {}

  getArticles(page: number = 1): Observable<ArticleWrapper> {
    return this._http
      .get(environment.url + `/api/1.0/posts/?page=${page}`)
      .map((response: Response): ArticleWrapper =>
      ArticleWrapper.fromJson(response.json())
      );
  }
}

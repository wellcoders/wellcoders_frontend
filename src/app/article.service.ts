import { Injectable } from "@angular/core";
import { Article } from "./article";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { environment } from "./../environments/environment";

@Injectable()
export class ArticleService {
  constructor(private _http: Http) {}

  getArticles(): Observable<Article[]> {
    return this._http
      .get(environment.url + "/api/1.0/posts/")
      .map((response: Response): Article[] =>
        Article.fromJsonToList(response.json())
      );
  }
}

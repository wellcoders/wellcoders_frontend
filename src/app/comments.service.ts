import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from './../environments/environment';
import { Article } from './article';
import { CommentWrapper } from "./comment-wrapper";


@Injectable()
export class CommentsService {

  constructor(private _http: Http) {}

  getComments(article: Article, page: number = 1): Observable<CommentWrapper> {
    console.log(`Obteniendo últimos comentarios de la página ${page}`);
    return this._http
      .get(environment.url + `/api/1.0/comments/?page=${page}&post=${article.pk}`)
      .map((response: Response): CommentWrapper => 
        CommentWrapper.fromJson(response.json())
      );

      // .map((data: Response) => {
      //   return data.json()
      // })
      // .map((json: any) => {
      //   return json.results as Comment[]
      // });
      
  }
}

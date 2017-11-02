import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from './../environments/environment';
import { Article } from './article';
import { User } from './user';
import { CommentWrapper } from "./comment-wrapper";
import { Comment } from "./comment";
import { SessionStorageHandler } from "./local-storage-handler"



@Injectable()
export class CommentsService extends SessionStorageHandler{

  constructor(private _http: Http) {
    super();
  }

  getComments(article: number, page: number = 1): Observable<CommentWrapper> {
    console.log(`Obteniendo comentarios previos - página ${page}`);
    return this._http
      .get(environment.url + `/api/1.0/comments/?page=${page}&post=${article}`)
      .map((response: Response): CommentWrapper => 
        CommentWrapper.fromJson(response.json())
      );
  }

  post(comment: Object): Observable<Comment> {
    console.log(`Grabar comentario`);
    return this._http
      .post(environment.url +`/api/1.0/comments/`, comment, this.getToken())
      .map((response: Response): Comment =>
        Comment.fromJson(response.json())
    );
  }

  getToken():RequestOptions {
    let headers = new Headers();
    headers.append('Authorization', 'JWT ' + this.user.token);

    let options = new RequestOptions({ headers: headers });
    return options;    
  }

}

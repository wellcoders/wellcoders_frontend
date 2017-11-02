import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from './../environments/environment';
import { SessionStorageHandler } from "./local-storage-handler"

@Injectable()
export class MediaService extends SessionStorageHandler{

  constructor(
    private _http: Http
  ) { super()}


  uploadFile(form: FormData): Observable<any> {
    
    let headers = new Headers();
    headers.append('Authorization', 'JWT ' + this.user.token);

    let options = new RequestOptions({ headers: headers });
    
    return this._http
      .post(environment.url + `/api/1.0/media/`, form, options);
  }
}

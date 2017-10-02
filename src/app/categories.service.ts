import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../environments/environment';
import "rxjs/add/operator/map";

@Injectable()
export class CategoriesService {

  constructor(
    private _http: Http) { }

  list(): Observable<Object[]> {
    return this._http.get(environment.url + `/api/1.0/categories/`)
      .map((response: Response): Object[] => response.json().results);
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { User } from './user';
import { environment } from './../environments/environment';


@Injectable()
export class UsersService {

  constructor(
    private _http: Http) { }

  register(user: User): void {
    this._http.post(environment.url + `/api/1.0/register/`, user).subscribe();
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { User } from './user';


@Injectable()
export class UsersService {

  constructor(
    private _http: Http) { }

  register(user: User): void {
    this._http.post(`http://localhost:8000/api/1.0/register/`, user).subscribe();
  }

}

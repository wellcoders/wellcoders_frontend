import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { environment } from './../environments/environment';
import { User } from './user';
import { SessionStorageHandler } from "./local-storage-handler"



@Injectable()
export class UsersService  extends SessionStorageHandler{

  constructor(
    private _http: Http) { 
      super();
    }

  register(user: Object): Observable<any> {
    return this._http.post(environment.url + `/api/1.0/register/`, user);
  }

  delete(user: Object): Observable<any> {
    let options = this.getToken();

    return this._http.delete(environment.url + '/api/1.0/users/' + user['pk'] + "/", options);
  }

  update(user: Object): Observable<any> {
    let self = this;
    let options = this.getToken();

    return this._http.patch(environment.url + '/api/1.0/users/' + user['pk'] + "/", user, options)
           .map((response: Response) => {
              let bdUser = User.fromJson(response.json());
              if (bdUser) {
                let o = self.updateUser(bdUser);
                sessionStorage.setItem('currentUser', JSON.stringify(o));
                return true;
              } else {
                return false;
              }
           })
             
  }

  getToken():RequestOptions {
    let headers = new Headers();
    headers.append('Authorization', 'JWT ' + this.user.token);

    let options = new RequestOptions({ headers: headers });
    return options;    
  }
}
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { environment } from './../environments/environment';

@Injectable()
export class AuthenticationService {
  public token: string;
  
     constructor(private _http: Http) {
         // set token if saved in local storage
         var currentUser = JSON.parse(localStorage.getItem('currentUser'));
         this.token = currentUser && currentUser.token;
     }
  
     login(user: object): Observable<boolean> {

         return this._http.post(environment.url + `/api/1.0/login/`, user)
             .map((response: Response) => {
                 // login successful if there's a jwt token in the response
                 let token = response.json() && response.json().token;
                 if (token) {
                     localStorage.setItem('currentUser', response.text());
                     return true;
                 } else {
                     return false;
                 }
             });
     }
  
     logout(): void {
         // clear token remove user from local storage to log user out
         this.token = null;
         localStorage.removeItem('currentUser');
     }
}

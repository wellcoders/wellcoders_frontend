import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { environment } from './../environments/environment';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private _http: Http) {
        // set token if saved in session storage
        var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(user: object): Observable<boolean> {
        return this._http.post(environment.url + `/api/1.0/login/`, user)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    sessionStorage.setItem('currentUser', response.text());
                    this.refresh();
                    return true;
                } else {
                    return false;
                }
            }
        );
    }

    logout(): void {
        // clear token remove user from session storage to log user out
        this.token = null;
        sessionStorage.removeItem('currentUser');
    }

    recovery(user: object): Observable<any> {
        return this._http.post(environment.url + `/api/1.0/recovery/`, user);
    }

    refresh(): void{
        var that = this;
        
        var currentUser = sessionStorage.getItem('currentUser')
        if(currentUser){
            currentUser = JSON.parse(currentUser)
            var user = currentUser['user'];
            delete currentUser['user'];
            that._http.post(environment.url + `/api/1.0/refresh/`, currentUser)
                .subscribe((response: Response) => {
                    let token = response.json() && response.json().token;
                        if (token) {
                            response['user'] = user
                            sessionStorage.setItem('currentUser', response.text());
                        }
                    },
                    (error: Response) => {
                        sessionStorage.removeItem('currentUser');
                    }
                );
            
            setTimeout(function(){
                that.refresh()
            }, 300000)
        }
    }
}

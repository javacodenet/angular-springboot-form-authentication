import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import {User} from "../model/model.user";
import 'rxjs/add/operator/map';
import {AppComponent} from "../app.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(public http: HttpClient) { }

  public logIn(user: User){
    // creating base64 encoded String from user name and password
    //var base64Credential: string = btoa( user.username+ ':' + user.password);
    //headers.append("Authorization", "Basic " + base64Credential);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    let body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);

    return this.http.post(AppComponent.API_URL+"/login" , body.toString() ,  httpOptions);
  }

  loginStuff() {
    return this.http.get(AppComponent.API_URL+"/account/testRest");
  }

  logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL+"logout",{})
      .map((response: Response) => {
        localStorage.removeItem('currentUser');
      });

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = ' https://routeegypt.herokuapp.com/';

  // tslint:disable-next-line: variable-name
  constructor(private _HttpClient: HttpClient) { }
  signUp(data): Observable<any>
  {
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signup`, data);
  }

  signIn(data): Observable<any>
  {
      return this._HttpClient.post(`https://routeegypt.herokuapp.com/signin`, data);
  }

  signOut(data): Observable<any>
  {
      return this._HttpClient.post(`https://routeegypt.herokuapp.com/signOut`, data);
  }
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RequestLogin } from './../models/RequestLogin';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(
      'http://localhost:8080/api/login',
      requestLogin
    );
  }
}

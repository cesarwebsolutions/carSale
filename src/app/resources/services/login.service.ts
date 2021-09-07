import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RequestLogin } from './../models/RequestLogin';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/ResponseLogin';
import {tap} from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private authservice: AuthService) { }

  public login(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(
      'http://127.0.0.1:8000/api/login',
      requestLogin
    ).pipe(
      tap((loginResponse) => (this.authservice.loginResponse = loginResponse)));
  }
}

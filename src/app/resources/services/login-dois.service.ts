import { ResponseLoginDois } from './../models/ResponseLoginDois';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestLoginDois } from './../models/RequestLoginDois';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDoisService {

  constructor(private httpClient: HttpClient) { }

  public doLoginDois(requestLoginDois: RequestLoginDois): Observable<ResponseLoginDois>{
    return this.httpClient.post<ResponseLoginDois>('http://localhost:8080/api/login', requestLoginDois)
  }
}

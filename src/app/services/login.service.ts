import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginResponse } from '../model/generic-interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginApi='https://reqres.in/api/login'

  constructor(private http:HttpClient) { }

  getToken(payload: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginApi, payload);
  }
}

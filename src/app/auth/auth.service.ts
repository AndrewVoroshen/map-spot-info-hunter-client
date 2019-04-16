import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignInResponse } from './model/sign-in-response';
import { SignInRequest } from './model/sign-in-request';
import { SignUpRequest } from './model/sign-up-request';

import { environment } from '../../environments/environment';
import { SingUpResponse } from './model/sign-up-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = '/api/signin';
  private signupUrl = '/api/signup';

  constructor(private http: HttpClient) {
  }

  signIn(credentials: SignInRequest): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(environment.apiUrl + this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpRequest): Observable<SingUpResponse> {
    return this.http.post<SingUpResponse>(environment.apiUrl + this.signupUrl, info, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUp } from '../interface/sign-up';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private readonly prmUrl = `/api/sign-up`;

  public constructor(private HttpClient: HttpClient) { }

  public signUp(signUp: SignUp): Observable<any> {
    const params = new HttpParams().set('Username', signUp.Username).set('Password', signUp.Password).set('repeatPassword', signUp.repeatPassword);
    return this.HttpClient.post(this.prmUrl, params);
  }
}

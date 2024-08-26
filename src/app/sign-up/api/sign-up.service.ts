import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUp } from '../interface/sign-up';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private readonly prmUrl = `/api/sign-up`;

  public constructor(private httpClient: HttpClient) { }

  public signUp(signUp: SignUp): Observable<any> {
    return this.httpClient.post(this.prmUrl, signUp);
  }
}

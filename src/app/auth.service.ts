import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AuthService {
  url;
  username = "";
  password = "";
  login;
  public getauth(username, password){
    this.username = username;
    this.password = password;
    this.url = `http://localhost:8080/login?username=${this.username}&password=${this.password}`
    return this.http.get(this.url);

  }
  constructor(private http: HttpClient) {

   }
}

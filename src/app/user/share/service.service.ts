import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {

private baseUrl ="https://m-mashi.herokuapp.com/";
  
    private registerUrl = this.baseUrl+ "api/v1/user/register/";
    private loginUrl = this.baseUrl+ "api/v1/user/login/"

  constructor(private http: HttpClient) {}

  public register(userData: any): Observable<any> {
    return this.http.post(this.registerUrl, userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post(this.loginUrl, userData);
  }
}

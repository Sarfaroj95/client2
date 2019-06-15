import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(userData: any): Observable<any> {
    return this.http.post(
      "http://localhost:3001/api/v1/user/register",
      userData
    );
  }

  public login(userData: any): Observable<any> {
    return this.http.post("http://localhost:3001/api/v1/user/login", userData);
  }
}

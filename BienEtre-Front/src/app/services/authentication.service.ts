import { environment } from './../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  URL: string = environment.URL_AUTH;      // UR_AUTH doit pointer sur http://localhost:8080/auth
  URLreg: string = environment.URL_REGISTER; // UR_REGISTER doit pointer sur http://localhost:8080/register

  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
    return this._http.post<any>(this.URL,
          { username: username, password: password })
        .pipe(map((res: any) => {
            if (res && res.token) {
               localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token }));
              }
        }));
}

signup(username: string, firstname: string, lastname: string, email: string, password: string) {
  return this._http.post<any>(this.URLreg,
        { username: username, firstName: firstname, lastName: lastname, email: email, password: password })
      .pipe(map((res: any) => {
          if (res && res.token) {
             localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token }));
            }
      }));
}

logout() {
       // remove user from local storage to log user out
       localStorage.removeItem('currentUser');
   }

   isLoggedIn(): boolean {
       return ( localStorage.getItem('currentUser')) ? true : false;
   }

   getJwtClaim(claim: string): string {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      return (new JwtHelperService()).decodeToken(JSON.parse(stored).token)[claim];
    }
    return null;
  }




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { User } from '../domain/user';
import { UserUtil } from '../utilities/UserUtils';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private client: HttpClient, private authService: AuthenticationService) { }

  URL = 'http://localhost:8080/users';

  public getUserDetails(username: string): Observable<User> {
    return this.client.get<User>(this.URL + '/' + username)
      .pipe(
        tap(val => console.log(`BEFORE MAP: ${val}`)),
        map(jsonItem => UserUtil.fromBackend(jsonItem)),
        tap(val => console.log(`AFTER MAP: ${val}`))
      );
  }
}


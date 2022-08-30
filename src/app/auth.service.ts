import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string | undefined;

  login(value: string): Observable<boolean> {
    if (value === 'Bobsaget123!') {
      return of(true).pipe(
        tap(val => this.isLoggedIn = true)
      );
    } else {
      return of(true).pipe(
        tap(val => this.isLoggedIn = false)
      );
    }
  }
}

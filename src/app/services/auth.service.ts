import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string="/login";

  login(name: string, password: string): Observable<boolean> {

  let isLoggedIn = (name === 'pikachu' && password === 'pikachu');
  return of(true).pipe(
  delay(1000),
  tap(_ => this.isLoggedIn = isLoggedIn)
  );
  }
  // Déconnexion
  logout(): void {
  this.isLoggedIn = false;
  }
  }


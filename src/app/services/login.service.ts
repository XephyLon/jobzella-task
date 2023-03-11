import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//-----------------------------------------------------------------------------------
// Please note that this is a very simple implementation with no JWT expiration check
//-----------------------------------------------------------------------------------

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = '';

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _userData$ = new BehaviorSubject({
    first_name: '',
    last_name: '',
    role: '',
    token: '',
  });
  public userData$ = this._userData$.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('authToken');
    this._isLoggedIn$.next(!!token);
  }

  login(payload: { email: string; password: string }) {
    return this.http
      .post<any>(this.loginUrl, payload, { responseType: 'json' })
      .subscribe((res) => {
        this._isLoggedIn$.next(true);
        this._userData$.next({ ...res });
        localStorage.setItem('authToken', res.token);
        this.router.navigate(['dashboard']);
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../interfaces/request';
import { Observable } from 'rxjs';
import { JwtResponse } from '../../interfaces/response';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuth(): boolean {
    const token: string | null = localStorage.getItem('token');
    return token != null;
  }

  signin(login: Login): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      `${environment.apiUrlBase}auth/signin`,
      login
    );
  }
}

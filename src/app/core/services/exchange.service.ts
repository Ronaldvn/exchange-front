import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exchange } from '../../interfaces/models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Exchange[]> {
    return this.http.get<Exchange[]>(`${environment.apiUrlBase}exchanges`);
  }

  save(exchange: Exchange): Observable<Exchange> {
    return this.http.post<Exchange>(
      `${environment.apiUrlBase}exchanges`,
      exchange
    );
  }
}

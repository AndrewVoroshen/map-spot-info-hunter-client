import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { SpotRequest } from './model/spot-request';
import { SpotResponse } from './model/spot-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  private spotSaveUrl = '/api/spot';
  private all = '/api/spot/all';
  private one = '/api/spot/'


  constructor(private http: HttpClient) {
  }

  save(spotRequest: SpotRequest): Observable<SpotResponse> {
    return this.http.post<SpotResponse>(environment.apiUrl + this.spotSaveUrl, spotRequest, httpOptions);
  }

  getAll() : Observable<SpotResponse[]> {
    return this.http.get<SpotResponse[]>(environment.apiUrl + this.all, httpOptions);
  }

  getOne(id: number) : Observable<SpotResponse> {
    return this.http.get<SpotResponse>(environment.apiUrl + this.one + id, httpOptions);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResult } from '../core/models/api-result';

@Injectable({
  providedIn: 'root',
})
export class SensorDataService {
  private apiUrl: string = 'http://localhost:3000/sensor-data';

  constructor(private readonly httpClient: HttpClient) {}

  findAll(): Observable<string> {
    return this.httpClient
      .get<ApiResult<string>>(this.apiUrl)
      .pipe(map((x) => x.value));
  }
}

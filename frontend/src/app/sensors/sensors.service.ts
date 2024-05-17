import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Sensor } from './interfaces/sensor';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  private apiUrl: string = 'http://localhost:3000/sensors';

  constructor(private readonly httpClient: HttpClient) {}

  findAll(): Observable<Sensor[]> {
    return this.httpClient.get<Sensor[]>(`${this.apiUrl}/data`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Sensor } from './interfaces/sensor';
import { SensorCreate } from './interfaces/sensor-create';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  private apiUrl: string = 'http://localhost:3000/sensors';

  constructor(private readonly httpClient: HttpClient) {}

  create(input: SensorCreate) {
    return this.httpClient.post<Sensor>(`${this.apiUrl}/data`, input);
  }

  findAll(): Observable<Sensor[]> {
    return this.httpClient.get<Sensor[]>(`${this.apiUrl}/data`);
  }
}

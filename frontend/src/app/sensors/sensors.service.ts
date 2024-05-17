import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, merge, scan } from 'rxjs';

import { Sensor } from './interfaces/sensor';
import { SensorCreate } from './interfaces/sensor-create';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  private apiUrl: string = 'http://localhost:3000/sensors';

  private sensorCreateSubject: Subject<Sensor> = new Subject();
  private sensorCreate$ = this.sensorCreateSubject.asObservable();
  sensors$ = merge(this.findAll(), this.sensorCreate$).pipe(
    scan((acc, value) => {
      return value instanceof Array ? value : [...acc, value];
    }, [] as Sensor[])
  );

  constructor(private readonly httpClient: HttpClient) {}

  create(input: SensorCreate): Subscription {
    return this.httpClient
      .post<Sensor>(`${this.apiUrl}/data`, input)
      .subscribe({
        next: (response) => this.sensorCreateSubject.next(response),
        error: (error) => console.log(error),
      });
  }

  private findAll(): Observable<Sensor[]> {
    return this.httpClient.get<Sensor[]>(`${this.apiUrl}/data`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  interval,
  merge,
  scan,
  startWith,
  switchMap,
} from 'rxjs';

import { Sensor } from './interfaces/sensor';
import { SensorCreate } from './interfaces/sensor-create';

const INTERVAL_DURATION = 10000;

@Injectable({
  providedIn: 'root',
})
export class SensorsService {
  private apiUrl: string = 'http://localhost:3000/sensors';

  private interval$ = interval(INTERVAL_DURATION);
  private sensorCreateSubject: Subject<Sensor> = new Subject();
  private sensorCreate$ = this.sensorCreateSubject.asObservable();
  private mergedIntervalSensorsAndSensorCreate$ = merge(
    this.interval$.pipe(
      startWith(0),
      switchMap(() => this.findAll())
    ),
    this.sensorCreate$
  );

  sensors$ = this.mergedIntervalSensorsAndSensorCreate$.pipe(
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

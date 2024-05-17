import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SensorDataService } from './sensor-data.service';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.scss'],
})
export class SensorDataComponent {
  sensorData$: Observable<string> = this.sensorDataService.findAll();

  constructor(private readonly sensorDataService: SensorDataService) {}
}

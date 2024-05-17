import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SensorDataService } from './sensors.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss'],
})
export class SensorsComponent {
  sensorData$: Observable<string> = this.sensorDataService.findAll();

  constructor(private readonly sensorDataService: SensorDataService) {}
}

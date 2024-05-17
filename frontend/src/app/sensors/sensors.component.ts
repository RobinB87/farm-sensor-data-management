import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Sensor } from './interfaces/sensor';
import { SensorService } from './sensors.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss'],
})
export class SensorsComponent {
  sensors$: Observable<Sensor[]> = this.sensorService.findAll();

  displayedColumns: string[] = ['id', 'type', 'value'];

  constructor(private readonly sensorService: SensorService) {}
}

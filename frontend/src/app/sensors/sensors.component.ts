import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Sensor } from './interfaces/sensor';
import { SensorCreateDialogComponent } from './sensor-create-dialog/sensor-create-dialog.component';
import { SensorService } from './sensors.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss'],
})
export class SensorsComponent {
  sensors$: Observable<Sensor[]> = this.sensorService.findAll();

  constructor(
    private readonly sensorService: SensorService,
    private readonly dialog: MatDialog
  ) {}

  openSensorCreateDialog(): void {
    this.dialog.open(SensorCreateDialogComponent);
  }
}

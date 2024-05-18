import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';

import { Sensor } from './interfaces/sensor';
import { SensorCreate } from './interfaces/sensor-create';
import { SensorCreateDialogComponent } from './sensor-create-dialog/sensor-create-dialog.component';
import { SensorsService } from './sensors.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss'],
})
export class SensorsComponent implements OnDestroy {
  sensors$: Observable<Sensor[]> = this.sensorService.sensors$;

  private subscriptions = new Subscription();

  constructor(
    private readonly sensorService: SensorsService,
    private readonly dialog: MatDialog
  ) {}

  openSensorCreateDialog(): void {
    this.dialog
      .open<SensorCreateDialogComponent, void, SensorCreate>(
        SensorCreateDialogComponent
      )
      .afterClosed()
      .subscribe((createInput) => {
        if (createInput)
          this.subscriptions.add(this.sensorService.create(createInput));
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

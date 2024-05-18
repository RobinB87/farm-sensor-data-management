import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/modules/shared/shared.module';
import { SensorCreateDialogComponent } from './sensor-create-dialog/sensor-create-dialog.component';
import { SensorsTableComponent } from './sensors-table/sensors-table.component';
import { SensorsComponent } from './sensors.component';

@NgModule({
  declarations: [
    SensorCreateDialogComponent,
    SensorsTableComponent,
    SensorsComponent,
  ],
  imports: [SharedModule],
})
export class SensorsModule {}

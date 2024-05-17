import { NgModule } from '@angular/core';

import { SensorsComponent } from './sensors.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { SensorTableComponent } from './sensors-table/sensors-table.component';

@NgModule({
  declarations: [SensorsComponent, SensorTableComponent],
  imports: [SharedModule],
})
export class SensorsModule {}

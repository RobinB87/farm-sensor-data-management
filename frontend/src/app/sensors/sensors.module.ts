import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/modules/shared/shared.module';
import { SensorTableComponent } from './sensors-table/sensors-table.component';
import { SensorsComponent } from './sensors.component';

@NgModule({
  declarations: [SensorTableComponent, SensorsComponent],
  imports: [SharedModule],
})
export class SensorsModule {}

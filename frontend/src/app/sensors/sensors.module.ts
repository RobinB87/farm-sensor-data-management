import { NgModule } from '@angular/core';

import { SensorsComponent } from './sensors.component';
import { SharedModule } from '../shared/modules/shared/shared.module';

@NgModule({
  declarations: [SensorsComponent],
  imports: [SharedModule],
})
export class SensorsModule {}

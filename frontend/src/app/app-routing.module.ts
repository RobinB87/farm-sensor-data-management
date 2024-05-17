import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorDataComponent } from './sensor-data/sensor-data.component';

const routes: Routes = [
  {
    path: '',
    component: SensorDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

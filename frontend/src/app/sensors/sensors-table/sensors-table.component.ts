import { Component, Input } from '@angular/core';

import { Sensor } from '../interfaces/sensor';

@Component({
  selector: 'app-sensors-table',
  templateUrl: './sensors-table.component.html',
  styleUrls: ['./sensors-table.component.scss'],
})
export class SensorsTableComponent {
  @Input() sensors!: Sensor[];

  displayedColumns: string[] = ['id', 'type', 'value'];
}

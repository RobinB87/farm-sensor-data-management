import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { SensorCreate } from '../interfaces/sensor-create';

const SENSOR_TYPES = [
  { value: 0, label: 'a' },
  { value: 1, label: 'b' },
  { value: 2, label: 'c' },
  { value: 3, label: 'd' },
];

interface SensorCreateForm {
  type: FormControl<string>;
  value: FormControl<number>;
}

@Component({
  selector: 'app-sensor-create-dialog',
  templateUrl: './sensor-create-dialog.component.html',
  styleUrls: ['./sensor-create-dialog.component.scss'],
})
export class SensorCreateDialogComponent {
  readonly sensorTypes = SENSOR_TYPES;

  readonly form: FormGroup<SensorCreateForm> =
    this.formBuilder.nonNullable.group({
      type: ['', Validators.required],
      value: [0, [Validators.required, Validators.pattern(/^[1-9]*$/)]],
    });

  constructor(
    private readonly dialogRef: MatDialogRef<SensorCreate>,
    private readonly formBuilder: FormBuilder
  ) {}

  save(): void {
    if (this.form.valid) this.dialogRef.close(this.form.value);
  }
}

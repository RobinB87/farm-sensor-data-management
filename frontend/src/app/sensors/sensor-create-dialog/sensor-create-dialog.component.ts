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
  { value: 'a', label: 'Type a' },
  { value: 'b', label: 'Type b' },
  { value: 'c', label: 'Type c' },
  { value: 'd', label: 'Type d' },
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

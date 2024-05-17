import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  form: FormGroup<SensorCreateForm> = this.formBuilder.nonNullable.group({
    type: '',
    value: 0,
  });

  constructor(private readonly formBuilder: FormBuilder) {}
}

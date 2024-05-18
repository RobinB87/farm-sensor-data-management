import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';

import { DebugElement } from '@angular/core';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { SensorsTableComponent } from './sensors-table/sensors-table.component';
import { SensorsComponent } from './sensors.component';
import { SensorsService } from './sensors.service';

describe('SensorsComponent', () => {
  let component: SensorsComponent;
  let fixture: ComponentFixture<SensorsComponent>;
  let debugElement: DebugElement;
  let sensorsServiceMock;

  beforeEach(() => {
    sensorsServiceMock = {
      sensors$: of([{ id: 1, type: 'a', value: 1 }]),
    };

    TestBed.configureTestingModule({
      declarations: [SensorsComponent, SensorsTableComponent],
      imports: [HttpClientTestingModule, MatDialogModule, SharedModule],
      providers: [{ provide: SensorsService, useValue: sensorsServiceMock }],
    });
    fixture = TestBed.createComponent(SensorsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('sensors table', () => {
    it('should display sensors-table when sensors are present', () => {
      const tableEl =
        debugElement.nativeElement.querySelector('app-sensors-table');

      expect(tableEl).toBeTruthy();
    });
  });
});

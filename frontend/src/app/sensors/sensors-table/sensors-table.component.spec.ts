import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTableComponent } from './sensors-table.component';

describe('SensorTableComponent', () => {
  let component: SensorTableComponent;
  let fixture: ComponentFixture<SensorTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SensorTableComponent],
    });
    fixture = TestBed.createComponent(SensorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

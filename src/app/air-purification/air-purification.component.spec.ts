import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPurificationComponent } from './air-purification.component';

describe('AirPurificationComponent', () => {
  let component: AirPurificationComponent;
  let fixture: ComponentFixture<AirPurificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPurificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPurificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

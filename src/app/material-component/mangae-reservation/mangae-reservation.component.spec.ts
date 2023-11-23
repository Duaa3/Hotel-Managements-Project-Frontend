import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaeReservationComponent } from './mangae-reservation.component';

describe('MangaeReservationComponent', () => {
  let component: MangaeReservationComponent;
  let fixture: ComponentFixture<MangaeReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaeReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

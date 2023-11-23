import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaeUserComponent } from './mangae-user.component';

describe('MangaeUserComponent', () => {
  let component: MangaeUserComponent;
  let fixture: ComponentFixture<MangaeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

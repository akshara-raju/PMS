import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodloginComponent } from './hodlogin.component';

describe('HodloginComponent', () => {
  let component: HodloginComponent;
  let fixture: ComponentFixture<HodloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

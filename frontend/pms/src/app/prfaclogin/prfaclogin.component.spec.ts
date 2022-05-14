import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfacloginComponent } from './prfaclogin.component';

describe('PrfacloginComponent', () => {
  let component: PrfacloginComponent;
  let fixture: ComponentFixture<PrfacloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrfacloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfacloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

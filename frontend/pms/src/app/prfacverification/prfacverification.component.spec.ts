import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfacverificationComponent } from './prfacverification.component';

describe('PrfacverificationComponent', () => {
  let component: PrfacverificationComponent;
  let fixture: ComponentFixture<PrfacverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrfacverificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfacverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

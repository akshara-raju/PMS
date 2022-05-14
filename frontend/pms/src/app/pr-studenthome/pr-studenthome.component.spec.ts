import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrStudenthomeComponent } from './pr-studenthome.component';

describe('PrStudenthomeComponent', () => {
  let component: PrStudenthomeComponent;
  let fixture: ComponentFixture<PrStudenthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrStudenthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrStudenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappliedComponent } from './viewapplied.component';

describe('ViewappliedComponent', () => {
  let component: ViewappliedComponent;
  let fixture: ComponentFixture<ViewappliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewappliedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

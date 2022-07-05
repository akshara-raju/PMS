import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdutyComponent } from './viewduty.component';

describe('ViewdutyComponent', () => {
  let component: ViewdutyComponent;
  let fixture: ComponentFixture<ViewdutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdutyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

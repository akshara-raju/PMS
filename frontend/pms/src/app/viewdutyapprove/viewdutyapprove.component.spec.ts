import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdutyapproveComponent } from './viewdutyapprove.component';

describe('ViewdutyapproveComponent', () => {
  let component: ViewdutyapproveComponent;
  let fixture: ComponentFixture<ViewdutyapproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdutyapproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdutyapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlacedDetailsComponent } from './update-placed-details.component';

describe('UpdatePlacedDetailsComponent', () => {
  let component: UpdatePlacedDetailsComponent;
  let fixture: ComponentFixture<UpdatePlacedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlacedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlacedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

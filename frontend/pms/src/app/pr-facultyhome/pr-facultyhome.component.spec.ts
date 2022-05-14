import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrFacultyhomeComponent } from './pr-facultyhome.component';

describe('PrFacultyhomeComponent', () => {
  let component: PrFacultyhomeComponent;
  let fixture: ComponentFixture<PrFacultyhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrFacultyhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrFacultyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

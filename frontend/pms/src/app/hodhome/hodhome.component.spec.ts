import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodhomeComponent } from './hodhome.component';

describe('HodhomeComponent', () => {
  let component: HodhomeComponent;
  let fixture: ComponentFixture<HodhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

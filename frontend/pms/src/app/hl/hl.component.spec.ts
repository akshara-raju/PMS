import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlComponent } from './hl.component';

describe('HlComponent', () => {
  let component: HlComponent;
  let fixture: ComponentFixture<HlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

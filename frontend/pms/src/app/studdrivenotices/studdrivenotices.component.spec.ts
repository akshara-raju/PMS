import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuddrivenoticesComponent } from './studdrivenotices.component';

describe('StuddrivenoticesComponent', () => {
  let component: StuddrivenoticesComponent;
  let fixture: ComponentFixture<StuddrivenoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuddrivenoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuddrivenoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

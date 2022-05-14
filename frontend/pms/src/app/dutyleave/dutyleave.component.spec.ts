import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyleaveComponent } from './dutyleave.component';

describe('DutyleaveComponent', () => {
  let component: DutyleaveComponent;
  let fixture: ComponentFixture<DutyleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DutyleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DutyleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

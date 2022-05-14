import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrstudnoticeComponent } from './prstudnotice.component';

describe('PrstudnoticeComponent', () => {
  let component: PrstudnoticeComponent;
  let fixture: ComponentFixture<PrstudnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrstudnoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrstudnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrstudloginComponent } from './prstudlogin.component';

describe('PrstudloginComponent', () => {
  let component: PrstudloginComponent;
  let fixture: ComponentFixture<PrstudloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrstudloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrstudloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadattendenceComponent } from './downloadattendence.component';

describe('DownloadattendenceComponent', () => {
  let component: DownloadattendenceComponent;
  let fixture: ComponentFixture<DownloadattendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadattendenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadattendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

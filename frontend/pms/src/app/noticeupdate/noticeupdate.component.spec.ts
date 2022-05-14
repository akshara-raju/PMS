import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeupdateComponent } from './noticeupdate.component';

describe('NoticeupdateComponent', () => {
  let component: NoticeupdateComponent;
  let fixture: ComponentFixture<NoticeupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

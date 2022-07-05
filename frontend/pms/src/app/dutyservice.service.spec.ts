import { TestBed } from '@angular/core/testing';

import { DutyserviceService } from './dutyservice.service';

describe('DutyserviceService', () => {
  let service: DutyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DutyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PlacementStatusService } from './placement-status.service';

describe('PlacementStatusService', () => {
  let service: PlacementStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacementStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

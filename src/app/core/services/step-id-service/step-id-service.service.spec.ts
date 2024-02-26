import { TestBed } from '@angular/core/testing';

import { StepIdService } from './step-id.service';

describe('StepIdServiceService', () => {
  let service: StepIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

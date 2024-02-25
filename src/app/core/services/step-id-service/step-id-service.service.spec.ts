import { TestBed } from '@angular/core/testing';

import { StepIdServiceService } from './step-id-service.service';

describe('StepIdServiceService', () => {
  let service: StepIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

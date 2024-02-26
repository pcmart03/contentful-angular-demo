import { TestBed } from '@angular/core/testing';

import { AccountOwnerDataService } from './account-owner-data.service';

describe('AccountOwnerDataService', () => {
  let service: AccountOwnerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountOwnerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetpasswordService } from './getpassword.service';

describe('GetpasswordService', () => {
  let service: GetpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

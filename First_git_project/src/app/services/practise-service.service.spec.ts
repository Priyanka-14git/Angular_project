import { TestBed } from '@angular/core/testing';

import { PractiseServiceService } from './practise-service.service';

describe('PractiseServiceService', () => {
  let service: PractiseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PractiseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

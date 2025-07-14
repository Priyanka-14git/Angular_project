import { TestBed } from '@angular/core/testing';

import { GuardServiceService } from './guard-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('GuardServiceService', () => {
  let service: GuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [GuardServiceService]
    });
    service = TestBed.inject(GuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

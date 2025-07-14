import { TestBed } from '@angular/core/testing';

import { DataSerciceService } from './data-sercice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataSerciceService', () => {
  let service: DataSerciceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(DataSerciceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

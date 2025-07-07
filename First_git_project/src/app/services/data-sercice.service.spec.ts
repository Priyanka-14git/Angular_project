import { TestBed } from '@angular/core/testing';

import { DataSerciceService } from './data-sercice.service';

describe('DataSerciceService', () => {
  let service: DataSerciceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSerciceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

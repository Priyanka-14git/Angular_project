import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { firstGuardGuard } from './first-guard.guard';

describe('firstGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => firstGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

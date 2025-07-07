import { TestBed } from '@angular/core/testing';

import { PractInterceptorInterceptor } from './pract-interceptor.interceptor';

describe('PractInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PractInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PractInterceptorInterceptor = TestBed.inject(PractInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

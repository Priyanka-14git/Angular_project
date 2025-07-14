import { ElementRef } from '@angular/core';
import { HostDirDirective } from './host-dir.directive';

describe('HostDirDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new HostDirDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});

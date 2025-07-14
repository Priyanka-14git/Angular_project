import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildMisComponent } from './child-mis.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('ChildMisComponent', () => {
  let component: ChildMisComponent;
  let fixture: ComponentFixture<ChildMisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildMisComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ChildMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

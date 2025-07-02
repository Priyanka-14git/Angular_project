import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsCompComponent } from './claims-comp.component';

describe('ClaimsCompComponent', () => {
  let component: ClaimsCompComponent;
  let fixture: ComponentFixture<ClaimsCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimsCompComponent]
    });
    fixture = TestBed.createComponent(ClaimsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

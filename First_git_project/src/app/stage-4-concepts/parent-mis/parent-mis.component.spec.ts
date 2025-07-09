import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMisComponent } from './parent-mis.component';

describe('ParentMisComponent', () => {
  let component: ParentMisComponent;
  let fixture: ComponentFixture<ParentMisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentMisComponent]
    });
    fixture = TestBed.createComponent(ParentMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

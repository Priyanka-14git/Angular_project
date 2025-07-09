import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildMisComponent } from './child-mis.component';

describe('ChildMisComponent', () => {
  let component: ChildMisComponent;
  let fixture: ComponentFixture<ChildMisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildMisComponent]
    });
    fixture = TestBed.createComponent(ChildMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

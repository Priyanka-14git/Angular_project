import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostConceptsComponent } from './host-concepts.component';

describe('HostConceptsComponent', () => {
  let component: HostConceptsComponent;
  let fixture: ComponentFixture<HostConceptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostConceptsComponent]
    });
    fixture = TestBed.createComponent(HostConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

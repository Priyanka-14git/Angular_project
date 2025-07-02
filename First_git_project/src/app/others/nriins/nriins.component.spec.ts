import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NRIInsComponent } from './nriins.component';

describe('NRIInsComponent', () => {
  let component: NRIInsComponent;
  let fixture: ComponentFixture<NRIInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NRIInsComponent]
    });
    fixture = TestBed.createComponent(NRIInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

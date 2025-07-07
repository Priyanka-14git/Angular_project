import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractideTwoComponent } from './practide-two.component';

describe('PractideTwoComponent', () => {
  let component: PractideTwoComponent;
  let fixture: ComponentFixture<PractideTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PractideTwoComponent]
    });
    fixture = TestBed.createComponent(PractideTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

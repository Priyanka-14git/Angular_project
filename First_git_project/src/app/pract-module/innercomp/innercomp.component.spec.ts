import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnercompComponent } from './innercomp.component';

describe('InnercompComponent', () => {
  let component: InnercompComponent;
  let fixture: ComponentFixture<InnercompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnercompComponent]
    });
    fixture = TestBed.createComponent(InnercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

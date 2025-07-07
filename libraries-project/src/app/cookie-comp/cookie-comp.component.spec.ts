import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieCompComponent } from './cookie-comp.component';

describe('CookieCompComponent', () => {
  let component: CookieCompComponent;
  let fixture: ComponentFixture<CookieCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieCompComponent]
    });
    fixture = TestBed.createComponent(CookieCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

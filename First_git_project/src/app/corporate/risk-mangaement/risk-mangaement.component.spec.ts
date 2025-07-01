import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskMangaementComponent } from './risk-mangaement.component';

describe('RiskMangaementComponent', () => {
  let component: RiskMangaementComponent;
  let fixture: ComponentFixture<RiskMangaementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskMangaementComponent]
    });
    fixture = TestBed.createComponent(RiskMangaementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

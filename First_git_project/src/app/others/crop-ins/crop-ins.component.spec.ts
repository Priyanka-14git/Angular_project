import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropInsComponent } from './crop-ins.component';

describe('CropInsComponent', () => {
  let component: CropInsComponent;
  let fixture: ComponentFixture<CropInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropInsComponent]
    });
    fixture = TestBed.createComponent(CropInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

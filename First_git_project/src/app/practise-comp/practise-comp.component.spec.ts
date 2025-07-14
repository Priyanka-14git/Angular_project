import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PractiseCompComponent } from './practise-comp.component';

describe('PractiseCompComponent', () => {
  let component: PractiseCompComponent;
  let fixture: ComponentFixture<PractiseCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PractiseCompComponent],
      imports: [HttpClientTestingModule] 
    });
    fixture = TestBed.createComponent(PractiseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

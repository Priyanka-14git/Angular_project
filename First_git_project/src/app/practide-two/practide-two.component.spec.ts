import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractideTwoComponent } from './practide-two.component';
import { ActivatedRoute } from '@angular/router';

describe('PractideTwoComponent', () => {
  let component: PractideTwoComponent;
  let fixture: ComponentFixture<PractideTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PractideTwoComponent],
       providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: (key: string) => 'test-value', // mock route param values
            },
          },
        },
      },
    ]
    });
    fixture = TestBed.createComponent(PractideTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

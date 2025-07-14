import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


import { FirstCompComponent } from './first-comp.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GuardServiceService } from '../services/guard-service.service';

describe('FirstCompComponent', () => {
  let component: FirstCompComponent;
  let fixture: ComponentFixture<FirstCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstCompComponent],
       imports: [HttpClientTestingModule] ,
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ key: 'value' }), // ✅ required to fix the .subscribe error
            params: of({ id: '123' }),
            queryParams: of({ q: 'test' }),
            fragment: of('section1'),
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  if (key === 'data') {
                    return '{"name":"Priyanka"}';
                  }
                  return '123';
                }
              }
            }
          }
        },
        {
          provide: GuardServiceService,
          useValue: {
            tryCatchmethod: () => of({ message: 'test' }) // ✅ mock service method if needed
          }
        }
      ]
    });

    fixture = TestBed.createComponent(FirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

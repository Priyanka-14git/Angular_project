import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMisComponent } from './parent-mis.component';
import { ChildMisComponent } from '../child-mis/child-mis.component';
import { HttpClientModule } from '@angular/common/http';

describe('ParentMisComponent', () => {
  let component: ParentMisComponent;
  let fixture: ComponentFixture<ParentMisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    
      declarations: [ParentMisComponent,
        ChildMisComponent
      ],
      providers:[HttpClientModule]
    });
    fixture = TestBed.createComponent(ParentMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

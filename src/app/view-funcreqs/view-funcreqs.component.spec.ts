import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFuncreqsComponent } from './view-funcreqs.component';

describe('ViewFuncreqsComponent', () => {
  let component: ViewFuncreqsComponent;
  let fixture: ComponentFixture<ViewFuncreqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFuncreqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFuncreqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

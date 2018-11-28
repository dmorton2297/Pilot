import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimeEstimateComponent } from './view-time-estimate.component';

describe('ViewTimeEstimateComponent', () => {
  let component: ViewTimeEstimateComponent;
  let fixture: ComponentFixture<ViewTimeEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTimeEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimeEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

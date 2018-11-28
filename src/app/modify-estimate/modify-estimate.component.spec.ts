import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEstimateComponent } from './modify-estimate.component';

describe('ModifyEstimateComponent', () => {
  let component: ModifyEstimateComponent;
  let fixture: ComponentFixture<ModifyEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

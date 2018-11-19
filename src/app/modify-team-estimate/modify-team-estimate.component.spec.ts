import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTeamEstimateComponent } from './modify-team-estimate.component';

describe('ModifyTeamEstimateComponent', () => {
  let component: ModifyTeamEstimateComponent;
  let fixture: ComponentFixture<ModifyTeamEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyTeamEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTeamEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

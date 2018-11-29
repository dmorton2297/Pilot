import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTaskDistributionComponent } from './team-task-distribution.component';

describe('TeamTaskDistributionComponent', () => {
  let component: TeamTaskDistributionComponent;
  let fixture: ComponentFixture<TeamTaskDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTaskDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTaskDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeamRoleComponent } from './manage-team-role.component';

describe('ManageTeamRoleComponent', () => {
  let component: ManageTeamRoleComponent;
  let fixture: ComponentFixture<ManageTeamRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeamRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeamRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

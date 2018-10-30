import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteToTeamComponent } from './invite-to-team.component';

describe('InviteToTeamComponent', () => {
  let component: InviteToTeamComponent;
  let fixture: ComponentFixture<InviteToTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteToTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

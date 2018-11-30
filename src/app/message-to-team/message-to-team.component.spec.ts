import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageToTeamComponent } from './message-to-team.component';

describe('MessageToTeamComponent', () => {
  let component: MessageToTeamComponent;
  let fixture: ComponentFixture<MessageToTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageToTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

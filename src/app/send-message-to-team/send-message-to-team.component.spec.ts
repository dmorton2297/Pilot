import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageToTeamComponent } from './send-message-to-team.component';

describe('SendMessageToTeamComponent', () => {
  let component: SendMessageToTeamComponent;
  let fixture: ComponentFixture<SendMessageToTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessageToTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

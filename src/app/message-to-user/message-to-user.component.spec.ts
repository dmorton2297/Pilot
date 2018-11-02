import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageToUserComponent } from './message-to-user.component';

describe('MessageToUserComponent', () => {
  let component: MessageToUserComponent;
  let fixture: ComponentFixture<MessageToUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageToUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

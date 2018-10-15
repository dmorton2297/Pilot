import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaminvitationsComponent } from './teaminvitations.component';

describe('TeaminvitationsComponent', () => {
  let component: TeaminvitationsComponent;
  let fixture: ComponentFixture<TeaminvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaminvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaminvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

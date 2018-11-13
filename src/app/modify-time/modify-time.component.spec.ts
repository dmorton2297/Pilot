import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTimeComponent } from './modify-time.component';

describe('ModifyTimeComponent', () => {
  let component: ModifyTimeComponent;
  let fixture: ComponentFixture<ModifyTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

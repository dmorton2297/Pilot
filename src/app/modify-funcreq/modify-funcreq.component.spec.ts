import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFuncreqComponent } from './modify-funcreq.component';

describe('ModifyFuncreqComponent', () => {
  let component: ModifyFuncreqComponent;
  let fixture: ComponentFixture<ModifyFuncreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyFuncreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyFuncreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

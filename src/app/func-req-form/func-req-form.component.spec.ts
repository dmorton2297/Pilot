import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { FuncReqFormComponent } from './func-req-form.component';

describe('FuncReqFormComponent', () => {
  let component: FuncReqFormComponent;
  let fixture: ComponentFixture<FuncReqFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncReqFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncReqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

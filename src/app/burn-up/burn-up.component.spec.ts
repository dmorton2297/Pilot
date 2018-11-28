import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnUpComponent } from './burn-up.component';

describe('BurnUpComponent', () => {
  let component: BurnUpComponent;
  let fixture: ComponentFixture<BurnUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurnUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

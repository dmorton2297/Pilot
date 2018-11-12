import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDistributionComponent } from './task-distribution.component';

describe('TaskDistributionComponent', () => {
  let component: TaskDistributionComponent;
  let fixture: ComponentFixture<TaskDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

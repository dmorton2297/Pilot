import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
export class ModifyTaskComponent {
    public taskForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    desc: ['', Validators.required],
    status: [''],
    estimation: [''],
    priority: ['', Validators.required],
    teamID: [''],
    creatorID: [''],
    assignedUser: ['', Validators.required],
    assignedUserID: [''],
    criterian: this.fb.array([
     this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  get criterian() {
    return this.taskForm.get('criterian') as FormArray;
  }

  addCriteria() {
    this.criterian.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Push task to database.
    this.taskForm.reset();
    // TODO: Go to previous page.
  }

  onCancel() {
    this.taskForm.reset();
    // TODO: Return to previous page
  }

}

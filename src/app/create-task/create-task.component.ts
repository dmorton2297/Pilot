import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
    taskForm = this.fb.group({
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

  // TODO: The ID's will need to be grabbed in put into the task.
  // TODO: The user arrays will need to be pulled from the database.
  priorities = ['Low', 'Medium', 'High'];
  users = ['myself', 'darren']; 

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

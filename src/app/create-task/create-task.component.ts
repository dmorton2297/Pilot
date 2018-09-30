import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
    taskForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        priority: ['', Validators.required],
        status: [''],
        funcreq: [''],
        estimate: [''],
        teamID: [''],
        creatorID: [''],
        assignedUser: ['', Validators.required],
        assignedUserID: [''],
        criterian: this.fb.array([
         this.fb.control('')
      ])
});

  // TODO: The ID's will need to be grabbed to be put into the task.
  // TODO: The user arrays will need to be pulled from the database.
  priorities = ['Low', 'Medium', 'High'];
  users = ['myself', 'darren']; 
  req = ['Req1', 'Req2', 'Req3', 'Req4'];

  constructor(private fb: FormBuilder, private http: Http) { }

  get criterian() {
    return this.taskForm.get('criterian') as FormArray;
  }

  addCriteria() {
    this.criterian.push(this.fb.control(''));
  }

  removeCriteria(i: number) {
    if (this.criterian.length == 1) {
      this.criterian.removeAt(i);
      this.criterian.push(this.fb.control(''));
      return;
    }
    this.criterian.removeAt(i);
  }

  onSubmit() {
    // TODO: Push task to database.
    let request : TaskRequest = {
      name: this.taskForm.get('name').value as string,
      description: this.taskForm.get('description').value as string,
      priority: 0,
      status: 0,
      funcreq: 0,
      estimate: this.taskForm.get('estimate').value as number,
      timespent: 0,
      creatorid: 0,
      teamid: 0,
      assigneduserid: 0
    }
    this.http.post('http://localhost:8000/api/savetask', request).subscribe();
    this.taskForm.reset();
    // TODO: Go to previous page.
  }

  onCancel() {
    this.taskForm.reset();
    // TODO: Return to previous page
  }
}

interface TaskRequest {
  
name: string,
description: string,
priority: number,
status: number,
funcreq: any,
estimate: number,
timespent: number,
teamid: number,
creatorid: number,
assigneduserid: number,
}

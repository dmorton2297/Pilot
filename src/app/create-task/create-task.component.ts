import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';

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

  // TODO: The ID's will need to be pulled from the database.
  // TODO: The user arrays will need to be pulled from the database.
  // TODO: The requirments will need to be pulled from the database.
  priorities = ['Low', 'Medium', 'High'];
  users = ['John', 'Sarah', 'Matt']; 
  req = ['Req1', 'Req2', 'Req3', 'Req4'];

  constructor(private fb: FormBuilder, private http: Http, private location: Location) {}

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

    // Remove empty criteria
    for (var i = 0; i < this.criterian.length; i++) {
      if (this.criterian[i] == '') {
        this.criterian.removeAt(i);
      }
    }

    // Send POST request
    let request : TaskRequest = {
      name: this.taskForm.get('name').value as string,
      description: this.taskForm.get('description').value as string,
      priority: 0,
      status: 0,
      funcreq: this.taskForm.get('funcreq').value as string,
      estimate: this.taskForm.get('estimate').value as number,
      timespent: 0,
      creatorid: 0,
      teamid: 0,
      assigneduserid: 0
    }
    this.http.post('http://localhost:8000/api/savetask', request).subscribe();
    window.alert('Task created!');
    this.taskForm.reset();
    this.location.back();
  }

  onCancel() {
    if(window.confirm('Are you sure you want to cancel?')){
      this.taskForm.reset();
      this.location.back();
    }
    return;
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

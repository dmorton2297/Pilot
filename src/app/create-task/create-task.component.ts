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

  public priorities = ['1', '2', '3'];
  public users = ['John', 'Sarah', 'Matt']; 
  public req = ['Req1', 'Req2', 'Req3', 'Req4'];

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
    for (var i = 0; i < this.criterian.length; i++) {
      if (this.criterian[i] == '') {
        this.criterian.removeAt(i);
      }
    }

    var temp: number;
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i] == this.taskForm.get('assignedUser').value as string) {
        temp = i;
      }
    }

    let request : TaskRequest = {
      name: this.taskForm.get('name').value as string,
      description: this.taskForm.get('description').value as string,
      priority: this.taskForm.get('priority').value as number,
      status: 0,
      funcreq: 0,
      estimate: this.taskForm.get('estimate').value as number,
      timespent: 0,
      creatorid: 0,
      teamid: 0,
      assigneduserid: temp
     // criterian: this.taskForm.get('criterian').value as string[],
     // assigneduser: this.taskForm.get('assignedUser').value as string
    }

    this.http.post('http://localhost:8000/api/savetask', request).subscribe();
    window.alert('Task created!');
    //  this.taskForm.reset();
    // this.location.back();
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
  assigneduserid: number
 // assigneduser: string,
 // criterian: any
}

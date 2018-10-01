import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})

export class ModifyTaskComponent implements OnInit {
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

  ngOnInit(): void {
    
  }

  priorities = ['Low', 'Medium', 'High'];
  users = ['John', 'Sarah', 'Matt']; 
  req = ['Req1', 'Req2', 'Req3', 'Req4'];
  filler_criteria = ["Criteria 1", "Criteria 2"]

  constructor(private fb: FormBuilder, private http: Http, private location: Location) { 

    // TODO: GET Request

    this.taskForm.controls['name'].setValue("Task Name");
    this.taskForm.controls['description'].setValue("Task Description");
    this.taskForm.controls['priority'].setValue(this.priorities[0]);
    this.taskForm.controls['status'].setValue(3);
    this.taskForm.controls['funcreq'].setValue(this.req);
    this.taskForm.controls['estimate'].setValue(3);
    this.taskForm.controls['teamID'].setValue(1);
    this.taskForm.controls['creatorID'].setValue(1);
    this.taskForm.controls['assignedUser'].setValue(this.users[0]);
    this.taskForm.controls['assignedUserID'].setValue(1);
//  this.taskForm.controls['criterian'].setValue();
  }

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
    // TODO: Push updates to database.
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
    window.alert("Task modified!");
    this.location.back();
  }

  onDelete() {
    if(!window.confirm('Are you sure you want to delete this task?')){
      return;
    } 
    // TODO: Remove from database
    this.taskForm.reset();
    this.location.back();
  }

  onCancel() {
    if(!window.confirm('Are you sure you want to cancel?')){
      return;
    } 
    this.location.back();
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

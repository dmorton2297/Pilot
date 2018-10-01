import { Component } from '@angular/core';
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

export class ModifyTaskComponent {
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

  public priorities : string[] = ['Low', 'Medium', 'High'];
  public users : string[] = ['John', 'Sarah', 'Matt']; 
  public req : string[] = ['Req1', 'Req2', 'Req3', 'Req4'];
  public filler_criteria : string[] = ["Criteria 1", "Criteria 2"];
  public task : TaskRequest;

  constructor(private fb: FormBuilder, private http: Http, private location: Location) { 
    this.http.get('http://localhost:8000/api/gettask/{id}').subscribe((res) => {
      this.task = res.json() as TaskRequest;
      console.log(this.task);
    
      this.taskForm.controls['name'].setValue(this.task.name);
      this.taskForm.controls['description'].setValue(this.task.description);
      this.taskForm.controls['priority'].setValue(this.priorities[this.task.priority]);
      this.taskForm.controls['status'].setValue(this.task.status);
      this.taskForm.controls['funcreq'].setValue(this.task.funcreq);
      this.taskForm.controls['estimate'].setValue(this.task.estimate);
      this.taskForm.controls['teamID'].setValue(this.task.teamid);
      this.taskForm.controls['creatorID'].setValue(this.task.creatorid);
      this.taskForm.controls['assignedUserID'].setValue(this.task.assigneduserid); 
      
    });    
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

    this.http.put('http://localhost:8000/api/task/{id}', request).subscribe();
    window.alert("Task modified!");
   // this.location.back();
  }

  onDelete() {
    if(!window.confirm('Are you sure you want to delete this task?')){
      return;
    } 
    // TODO: Post request to database
    this.taskForm.reset();
   // this.location.back();
  }

  onCancel() {
    if(!window.confirm('Are you sure you want to cancel?')){
      return;
    } 
   // this.location.back();
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

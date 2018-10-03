import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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

  public users : string[] = ['John', 'Sarah', 'Matt']; 
  public filler_criteria : string[] = ["Criteria 1", "Criteria 2"];

  public priorities : string[] = ['1', '2', '3'];
  public task : Task;
  public req : FunctionalRequirment[];
  public taskId : string;
  public teamId = 0;

  public selectedReqs: FunctionalRequirment[];

  constructor(private fb: FormBuilder, private http: Http, private location: Location, private activatedRoute: ActivatedRoute) { 
    this.taskId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/api/gettask/' + this.taskId).subscribe((res) => {
    this.task = res.json() as Task;
    this.taskForm.patchValue({name: this.task[0].name});
    this.taskForm.patchValue({description: this.task[0].description});
    this.taskForm.patchValue({priority: this.priorities[this.task[0].priority - 1]});
    this.taskForm.patchValue({status: this.task[0].status});
    this.taskForm.patchValue({estimate: this.task[0].estimate});
    this.taskForm.patchValue({teamID: this.task[0].teamid});
    this.taskForm.patchValue({creatorID: this.task[0].creatorid});
    this.taskForm.patchValue({assignedUserID: this.task[0].assigneduserid}); 
    this.taskForm.patchValue({assignedUser: this.users[this.task[0].assigneduserid]});
    });  
    this.http.get('http://localhost:8000/api/getSelectedReqs/' + this.taskId).subscribe((res) => {
      this.selectedReqs = res.json() as FunctionalRequirment[];
      this.taskForm.patchValue({funcreq: this.selectedReqs});
    });
    this.http.get('http://localhost:8000/api/getfuncreqs/').subscribe((res) => {
      this.req = res.json() as FunctionalRequirment[];
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
    let request : Task = {
      id: this.taskId,
      name: this.taskForm.get('name').value as string,
      description: this.taskForm.get('description').value as string,
      priority: this.taskForm.get('priority').value as number,
      status: 0,
      funcreq: 0,
      estimate: this.taskForm.get('estimate').value as number,
      timespent: 0,
      creatorid: 0,
      teamid: 0,
      assigneduserid: 0
    }
    ;
    this.http.post('http://localhost:8000/api/modifytask/' + this.taskId, request, this.taskId).subscribe();
    window.alert("Task modified!");
    // this.location.back();
  }

  onDelete() {
    if(!window.confirm('Are you sure you want to delete this task?')){
      return;
    } 

    this.http.post('http://localhost:8000/api/deletetask/' + this.taskId, this.taskId).subscribe();
    this.taskForm.reset();
    //this.location.back();
  }

  onCancel() {
    if(!window.confirm('Are you sure you want to cancel?')){
      return;
    } 
    //this.location.back();
  }
}

interface FunctionalRequirment {
  id: string,
  name: string,
  description: string
}

interface Task {
  id: string,
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
}

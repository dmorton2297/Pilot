import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {MatSnackBar} from '@angular/material';
import { AuthService } from '../auth.service';

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
  public req : FunctionalRequirement[];
  public teamId = 0;
  public taskId : string;

  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.http.get('http://localhost:8000/api/getfuncreqs/' + this.teamId).subscribe((res) => {
      console.log(res.json());
      this.req = res.json() as FunctionalRequirement[];
    });
  }

  /**
   * Gets criterian for the view.
   */
  get criterian() {
    return this.taskForm.get('criterian') as FormArray;
  }

  /**
   * Adds criteria from view to criterian rray.
   */
  addCriteria() {
    this.criterian.push(this.fb.control(''));
  }

  /**
   * Removes criterian from index i.
   * Ensures at least one line entry in view.
   * @param i 
   */
  removeCriteria(i: number) {
    if (this.criterian.length == 1) {
      this.criterian.removeAt(i);
      this.criterian.push(this.fb.control(''));
      return;
    }
    this.criterian.removeAt(i);
  }

  /**
   * Removes empty criterian.
   */
  cleanCriteria() {
    for (var i = 0; i < this.criterian.length; i++) {
      if (this.criterian[i] == "") {
        this.criterian.removeAt(i);
      }
    }
  }

  getMembers() { 

  }

  onSubmit() {
    this.cleanCriteria();

    let request : TaskRequest = {
      name: this.taskForm.get('name').value as string,
      description: this.taskForm.get('description').value as string,
      priority: this.taskForm.get('priority').value as number,
      status: 0,
      funcreq: this.taskForm.get('funcreq').value as FunctionalRequirement,
      estimate: this.taskForm.get('estimate').value as number,
      timespent: 0,
      creatorid: 0, //this.auth.id,
      teamid: 0,
      assigneduserid: 0,
      criterian: this.taskForm.get('criterian').value,
    }

    this.http.post('http://localhost:8000/api/savetask', request).subscribe((res) => {
      console.log(res);
    });

    //this.taskId = this.activatedRoute.snapshot.paramMap.get('id');

    this.snackBar.open('Task created', 'Ok', {
      duration: 3000
    });
  }

  onCancel() {
      this.taskForm.reset();
      this.router.navigateByUrl('/');
  }

  openSnackBar(maessage: string) {
    
  }
}


interface FunctionalRequirement {
  name: string,
  description: string,
  teamid: number
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
  criterian: any
}

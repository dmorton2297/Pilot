import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

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
      ])
});

  public users : string[] = ['John', 'Sarah', 'Matt']; 
  public priorities : string[] = ['1', '2', '3'];
  public task : Task;
  public req : FunctionalRequirement[];
  public selectedReqs: FunctionalRequirement[];
  public taskId : string;
  public teamId = 0;

  constructor(private fb: FormBuilder, private http: Http, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.taskId = this.activatedRoute.snapshot.paramMap.get('id');

    /* Getting task form values */
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

    /* Getting functional requirements the user selected on creation */
    this.http.get('http://localhost:8000/api/getSelectedReqs/' + this.taskId).subscribe((res) => {
      this.selectedReqs = res.json() as FunctionalRequirement[];
      this.taskForm.patchValue({funcreq: this.selectedReqs});
    });

    /* Getting all criteria associated with team */
    this.http.get('http://localhost:8000/api/getfuncreqs/' + this.teamId).subscribe((res) => {
      this.req = res.json() as FunctionalRequirement[];
    });
  
    /* Getting all acceptance criteria associated with team */
    var criteria: string[];
    this.http.get('http://localhost:8000/api/getcriterian/' + this.taskId).subscribe((res) => {
      criteria = res.json() as string[];
      for (var i = 0; i < criteria.length; i++) {
        this.pushCriteria(criteria[i]);
      } 

      this.removeDuplicate();
      this.cleanCriteria();
    });
  }

  /**
   *  This resolves the problem of selected functional requirements being
   *  displayed twice.
   */
  removeDuplicate() {
    for (var i = 0; i < this.req.length; i++) {
      for (var j = 0; j < this.selectedReqs.length; j++) {
        if (this.req[i].id == this.selectedReqs[j].id) {
          this.req.splice(i, 1);
        }
      }
    }
  }

  /**
   * Gets criterian for the view.
   */
  get criterian() {
    return this.taskForm.get('criterian') as FormArray;
  }

  // TODO: Do I need this function.
  /**
   *  Adds criteria from view to criterian array.
   */
  addCriteria() {
    this.criterian.push(this.fb.control(''));
  }
  
  /**
   * Adds criteria from database to criterian array.
   * 
   * @param criterian 
   */
  pushCriteria(criterian: string) {
    if (criterian != null) {
       this.criterian.push(this.fb.control(criterian));
    }
  }

  /**
   * Removes criterian from index i.
   * 
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
   *  Removes empty criteria.
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
    let request : Task = {
      id: this.taskId,
      name: this.taskForm.get('name').value as string,
      description: this.taskForm.get('description').value as string,
      priority: this.taskForm.get('priority').value as number,
      status: 0,
      funcreq: this.taskForm.get('funcreq').value as FunctionalRequirement,
      estimate: this.taskForm.get('estimate').value as number,
      timespent: 0,
      creatorid: 0,
      teamid: 0,
      assigneduserid: 0,
      criterian: this.taskForm.get('criterian').value
    }
    this.http.post('http://localhost:8000/api/modifytask/' + this.taskId, request, this.taskId).subscribe();
    this.snackBar.open('Task modified', 'Ok', {
      duration: 3000
    });
  }

  onDelete() {
    if(!window.confirm('Are you sure you want to delete this task?')){
      return;
    } 
    this.http.post('http://localhost:8000/api/deletetask/' + this.taskId, this.taskId).subscribe();
    this.taskForm.reset();
  }

  onCancel() {
    this.router.navigateByUrl('/backlog');
  }
}

interface FunctionalRequirement {
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
  assigneduserid: number,
  criterian: any
}

import { Component } from '@angular/core';
import { FormBuilder, EmailValidator } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';
import { UserMessagesComponent } from '../user-messages/user-messages.component';

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
        assignedUserid: [''],
        criterian: this.fb.array([
         this.fb.control('')
      ])
});

  public priorities = ['1', '2', '3'];
  public users : TeamMember[] = [];
  public req : FunctionalRequirement[];
  public teamId = 0;
  public taskId : string;

  constructor(private fb: FormBuilder, private http: Http, private state: StateService, private auth: AuthService, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.http.get('http://localhost:8000/api/getfuncreqs/' + this.state.getCurrentStateId()).subscribe((res) => {
      if (res.json() != -1) {
        this.req = res.json() as FunctionalRequirement[];
        console.log("func req");
        console.log(this.req);
      }
    });
    this.loadUsers();
  }

  /**
   * Insert unassigned in assigned user input field.
   */
  insertUnassigned() {
   let request : TeamMember = {
      id : -1,
      email : "Unassigned",
      memberName : "Unassigned",
      teamId : -1, 
      teamName : "Unassigned",
      teamRole : "Unassigned"
   }
   this.users[this.users.length] = request;
   this.taskForm.patchValue({assignedUser: request});
  }

  /**
   * Load users from team into assignment dropdown.
   */
  temp : User;
  loadUsers() {
    // "Me" backlog view
    if (this.state.getCurrentStateId() == 0) {
      this.http.get('http://localhost:8000/api/getuser/' + this.auth.getUserId()).subscribe((res) => {
        this.temp = res.json() as User;
        // Get user returns User Object, change that to a team member object for user array.
        let request : TeamMember = {
          id : this.temp[0].id,
          email : this.temp[0].email,
          memberName : this.temp[0].name,
          teamId : -1,
          teamName : "0",
          teamRole : "0"
        }
        this.users.push(request);
        this.insertUnassigned();
      });
    } else {
      // Team backlog view
      this.http.get('http://localhost:8000/api/getteammembers/' + this.state.getCurrentStateId()).subscribe((res) => {
        this.users = res.json() as TeamMember[];
        this.insertUnassigned();
      });
    }
  }

  /**
   * Gets criterian for the view.
   */
  get criterian() {
    return this.taskForm.get('criterian') as FormArray;
  }

  /**
   * Adds criteria from view to criterian array.
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
      creatorid: this.auth.getUserId(),
      teamid: this.state.getCurrentStateId(),
      assigneduserid: this.taskForm.get('assignedUser').value.id as number,
      criterian: this.taskForm.get('criterian').value,
    }

    if (this.taskForm.get('estimate').value < 0) {
      this.snackBar.open('Estimate must be greater than zero!', 'Ok', {
        duration: 3000
      });
      return;
    }
    
    this.http.post('http://localhost:8000/api/savetask', request).subscribe((res) => {
      this.snackBar.open('Task created', 'Ok', {
        duration: 3000
      });
      this.location.back();
    });
  }

  onCancel() {
      this.taskForm.reset();
      this.router.navigateByUrl('/');
  }
}

interface User {
  id: number,
  name: string,
  email: string
}

interface TeamMember {
  id : number,
  email : string,
  memberName : string,
  teamId : number, 
  teamName : string,
  teamRole : string
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

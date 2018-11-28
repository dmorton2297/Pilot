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

  public users : TeamMember[] = [];
  public priorities : string[] = ['1', '2', '3'];
  public task : Task;
  public req : FunctionalRequirement[];
  public selectedReq: FunctionalRequirement;
  public taskId : string;
  public teamId = 0;
  public flag = 0;
  public assigneduser: User;

  constructor(private fb: FormBuilder, private http: Http, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router, private state: StateService, private auth: AuthService) { 
    this.taskId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/api/gettask/' + this.taskId).subscribe((res) => {
      this.task = res.json() as Task;
      console.log(res.json());
      this.taskForm.patchValue({name: this.task[0].name});
      this.taskForm.patchValue({description: this.task[0].description});
      this.taskForm.patchValue({priority: this.priorities[this.task[0].priority - 1]});
      this.taskForm.patchValue({estimate: this.task[0].estimate});
      this.taskForm.patchValue({teamID: this.task[0].teamid});
      this.taskForm.patchValue({creatorID: this.task[0].creatorid});
      this.taskForm.patchValue({assignedUserID: this.task[0].assigneduserid}); 
      this.teamId = this.task[0].teamid;
      this.loadUsers();
      this.http.get('http://localhost:8000/api/getuser/' + this.task[0].assigneduserid).subscribe((res) => {
        this.assigneduser = res.json() as User;
        if (res.json() == "") {
          // Unassigned user always last in array.
          this.taskForm.patchValue({assignedUser: this.users[this.users.length-1]});
        } 
        else {
          // Find assigned user in user array.
          for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id == this.assigneduser[0].id) {
              this.taskForm.patchValue({assignedUser: this.users[i]});
            }
          }
        } 
      });

    });  

    // Get the selected functional requirement and put it into taskForm.
    this.http.get('http://localhost:8000/api/getSelectedReqs/' + this.taskId).subscribe((res) => {
      // Set the form value with the selected functional requirement.
      if (res.json() != -1) {
        this.selectedReq = res.json() as FunctionalRequirement;
        this.taskForm.patchValue({funcreq: this.selectedReq});
      } 
      // Get all the functional requirments for the drop-down.
      this.http.get('http://localhost:8000/api/getfuncreqs/' + this.state.getCurrentStateId()).subscribe((res) => {
        if (res.json() != "" && res.json() != -1) { 
          this.req = res.json() as FunctionalRequirement[];
          // Patching the value wasn't working, this auto-fills functional req in the form.
          for (var i = 0; i < this.req.length; i++) {
            if (this.req[i].id == this.selectedReq.id) {
              this.selectedReq = this.req[i];
            }
          }
        }
      });
    });



    /* Getting all acceptance criteria associated with team */
    var criteria: string[];
    this.http.get('http://localhost:8000/api/getcriterian/' + this.taskId).subscribe((res) => {
      criteria = res.json() as string[];
      for (var i = 0; i < criteria.length; i++) {
        this.pushCriteria(criteria[i]);
      } 
      this.cleanCriteria();
    });
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
   }

  /**
   * Load users from team into assignment dropdown.
   */
  temp : User;
  loadUsers() {
    if (this.teamId == 0) {
      this.http.get('http://localhost:8000/api/getuser/' + this.auth.getUserId()).subscribe((res) => {
        this.temp = res.json() as User;
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
      this.http.get('http://localhost:8000/api/getteammembers/' + this.teamId).subscribe((res) => {
        this.users = res.json() as TeamMember[];
        console.log(res.json());
        this.insertUnassigned();
      });
    }
   // this.getUsers();
 }

  getUsers() {
    this.http.get('http://localhost:8000/api/getallusers').subscribe((res) => {
     // this.users = res.json() as User[];
    });
  }

  /**
   * Gets criterian for the view.
   */
  get criterian() {
    return this.taskForm.get('criterian') as FormArray;
  }

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
      creatorid: this.taskForm.get('creatorID').value as number,
      teamid: 0,
      assigneduserid: this.taskForm.get('assignedUser').value.id as number,
      criterian: this.taskForm.get('criterian').value
    }

    if (this.taskForm.get('estimate').value < 0) {
      this.snackBar.open('Estimate must be greater than zero!', 'Ok', {
        duration: 3000
      });
      return;
    }

    this.http.post('http://localhost:8000/api/modifytask/' + this.taskId, request, this.taskId).subscribe((res) => {
      this.router.navigateByUrl('/backlog');
    });
    this.snackBar.open('Task modified', 'Ok', {
      duration: 3000
    });
  }

  onDelete() {
    if(!window.confirm('Are you sure you want to delete this task?')){
      return;
    } 
    this.http.post('http://localhost:8000/api/deletetask/' + this.taskId, this.taskId).subscribe((res) => {
      this.taskForm.reset();
      this.snackBar.open('Task deleted', 'Ok', {
        duration: 3000
      });
      this.router.navigateByUrl('/');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/backlog');
  }

}

interface User {
  id: number,
  name: string
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

interface TeamMember {
  id : number,
  email : string,
  memberName : string,
  teamId : number, 
  teamName : string,
  teamRole : string
}

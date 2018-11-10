import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { StateService } from '../state.service';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';






@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css']
})
export class CreateSprintComponent {
  // form group for form
  public sprintForm = this.fb.group( {
          name: ['', Validators.required],
          description: ['', Validators.required],
          start: [Date.now()],
          end: [Date.now()]
        });
  
  // task data for table
  public tasks : Task[];

  // selected tasks for sprint
  public selectedTasks: number[] = [];

  // displayed columns for table
  public displayedColumns: string[] = ['name', 'description', 'action'];

  // on this component loading
  constructor(private fb: FormBuilder, public location: Location, private http: Http, private state: StateService, private auth: AuthService) {
    this.loadTaskData();
  }

  // load task data into tasks
  loadTaskData() {
    var requestUrl = '';
    if (this.state.getCurrentStateId() == 0) {
      requestUrl = 'http://localhost:8000/api/getusertasks/' + this.auth.getUserId();
    } else {
      requestUrl = 'http://localhost:8000/api/getteamtasks/' + this.state.getCurrentStateId();
    }

    this.http.get(requestUrl).subscribe((res) => {
      this.tasks = res.json() as Task[];
      console.log(this.tasks);
    });
    
  }

  // if the user cancels go back
  onCancel() { 
    this.location.back();
  }

  // if the user clicks submit
  onSubmit() {
    window.alert('form submit clicked');
  }

  // if the user checks or unchecks a task 
  onTaskChecked(id: number) {
    const index = this.selectedTasks.indexOf(id, 0);
    if (index > -1) {
      this.selectedTasks.splice(index, 1);
      console.log(this.selectedTasks);
    } else {
      this.selectedTasks.push(id);
      console.log(this.selectedTasks);
    }
  }
}

// interface for task date
interface Task {
  id: number,
  name: string,
  description: string,
  sprint: number
}
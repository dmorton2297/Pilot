import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { StateService } from '../state.service';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-sprint',
  templateUrl: './manage-sprint.component.html',
  styleUrls: ['./manage-sprint.component.css']
})
export class ManageSprintComponent implements OnInit {

  public sprint: Sprint;
  public sprintId: string;

  public sprintForm = this.fb.group( {
    name: ['', Validators.required],
    description: ['', Validators.required],
    start: [Date.now()],
    end: [Date.now()],
  });

  // task data for table
  public tasks : Task[];

  // selected tasks for sprint
  public selectedTasks: number[] = [];

  // displayed columns for table
  public displayedColumns: string[] = ['name', 'description', 'action'];
  constructor(private fb: FormBuilder, public location: Location, private http: Http, private activatedRoute: ActivatedRoute, private state: StateService, private auth: AuthService, private snackBar: MatSnackBar) { 
    this.sprintId = this.activatedRoute.snapshot.paramMap.get('sprintid');
    this.loadSprintTasks();
    this.loadTaskData();
  }

  ngOnInit() {
    
  }

  // load sprint data
  loadSprintData() {
    this.http.get('http://localhost:8000/api/getsprint/' + this.sprintId ).subscribe((res) => {
      var temp = res.json() as Sprint[];
      this.sprint = temp[0];
      var startDate : string = this.sprint.start_date;
      var endDate : string = this.sprint.end_date;
      this.sprintForm.patchValue({name: this.sprint.name});
      this.sprintForm.patchValue({description: this.sprint.description});
      this.sprintForm.patchValue({start: startDate});
      this.sprintForm.patchValue({end: endDate});
    })
  }

  loadSprintTasks() {
    this.http.get('http://localhost:8000/api/gettasksforsprint/' + this.sprintId).subscribe((res) => {
      this.selectedTasks = res.json();
      this.loadSprintData();

    });
  }

  isIncluded(id) {
    console.log('Checking!')
    for (var i = 0; i < this.selectedTasks.length; i++) {
      if (id == this.selectedTasks[i]) {
        return true;
      }
    }

    return false;
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

  // if the user clicks submit
  onSubmit() {
    let request : SprintRequest = {
      id: ''+ this.sprintId,
      name: this.sprintForm.get('name').value as string,
      description: this.sprintForm.get('description').value as string,
      start: this.sprintForm.get('start').value as Date,
      end: this.sprintForm.get('end').value as Date,
      tasks: this.selectedTasks,
      creatorid: this.auth.getUserId(),
      teamid: this.state.getCurrentStateId()
    }

    this.http.post('http://localhost:8000/api/updateSprint', request).subscribe((res) => {
      this.location.back();
    });
  }

  onCancel() {
    this.location.back();
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

//interface for task date
interface Task {
  id: number,
  name: string,
  description: string,
  sprint: number
}

interface Sprint {
  id: number,
  name: string,
  description: string,
  start_date: string,
  end_date: string
}

interface SprintRequest {
  id: string
  name: string,
  description: string,
  start: Date,
  end: Date,
  tasks: number[],
  creatorid: number,
  teamid: number
}

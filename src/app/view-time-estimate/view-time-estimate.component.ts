import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-view-time-estimate',
  templateUrl: './view-time-estimate.component.html',
  styleUrls: ['./view-time-estimate.component.css']
})
export class ViewTimeEstimateComponent {

  visible: boolean = false;

  public teamName = "Me";
  public teamId;
  public plannedHours = 0;
  public displayedColumns: String[] = ['id', 'name', 'description', 'estimate', 'actions'];
  public tasks: Task[];
  public dialog;

  constructor(private state: StateService, private activatedRoute: ActivatedRoute, private router: Router, private http: Http, public snackBar: MatSnackBar, private auth: AuthService) { 
    this.loadData();
  }

  loadData() {
    this.tasks = [];
    this.http.get('http://localhost:8000/api/getteamtasks/' + this.state.getCurrentStateId()).subscribe((res) => {
      if (res.json() != -1) {
        this.tasks = res.json() as Task[];
        console.log(this.tasks);
        for (var i = 0; i < this.tasks.length; i++) {
          this.plannedHours += Number(this.tasks[i].estimate);
        }
      }
      if (this.state.getCurrentStateId() != 0) {
        this.http.get('http://localhost:8000/api/getteam/' + this.state.getCurrentStateId()).subscribe((res) => {
          let t = res.json() as Team;
          this.teamName = t[0].name;
        });
      }
    });

  }
  
  
  onModifyPressed(id) {
    this.router.navigateByUrl('/modifyestimate/' + id);
  }


}

interface Team {
  id: number,
  name: string,
  description: string,
  invitemsg: string,
  color: any
  creatorId: number,
  created_at: number,
  updated_at: number
}

interface Task {
  id: number,
  name: string,
  description: string,
  estimate: number
}

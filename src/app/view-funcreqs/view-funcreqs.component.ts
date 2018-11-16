import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-view-funcreqs',
  templateUrl: './view-funcreqs.component.html',
  styleUrls: ['./view-funcreqs.component.css']
})
export class ViewFuncreqsComponent {

  visible: boolean = false;

  public teamName = "Me";
  public displayedColumns: String[] = ['id', 'name', 'description', 'actions'];
  public reqs: FunctionalRequirement[];
  public dialog;

  @Output() signalEvent = new EventEmitter<string>();
  constructor(private state: StateService, private activatedRoute: ActivatedRoute, private router: Router, private http: Http, public snackBar: MatSnackBar, private auth: AuthService) { 
    this.loadData();
  }

  loadData() {
    this.reqs = [];
    this.http.get('http://localhost:8000/api/getfuncreqs/' + this.state.getCurrentStateId()).subscribe((res) => {
      if (res.json() != -1) {
        this.reqs = res.json() as FunctionalRequirement[];
        console.log(res.json());
      }
      if (this.state.getCurrentStateId() != 0) {
        this.http.get('http://localhost:8000/api/getteam/' + this.state.getCurrentStateId()).subscribe((res) => {
          let t = res.json() as Team;
          this.teamName = t[0].name;
        });
      }
    });
  }

  getFunctionalRequirements() {

  }
  
  updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }
  
  onModifyPressed(id) {

  }

  onDeletePressed(id) {
    this.http.get('http://localhost:8000/api/delfuncreq/' + id).subscribe((res) => {
      this.snackBar.open('Functional Requirement Removed', 'Ok', {
        duration: 3000
      });
    });
    this.updateSignal();
  }

  ngOnInit() {
    console.log('Rendering functional requirements dashboard');
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

interface FunctionalRequirement {
  name: string,
  description: string,
  teamid: number
}

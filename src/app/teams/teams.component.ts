import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';
import { MatDialog, MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  public teams: Team[];
  public displayedColumns: String[] = ['id', 'name', 'description', 'created', 'actions'];

  @Output() signalEvent = new EventEmitter<string>();
  constructor(public snackBar: MatSnackBar, private state: StateService, private router: Router, private http: Http, private auth: AuthService) {
    this.teams = []; 
    this.loadData();
  }

  loadData() {
    this.http.get('http://localhost:8000/api/getjoinedteams/' + this.auth.getUserId()).subscribe((res) => {
      this.teams = res.json() as Team[];
    });
  }

  updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }
  

  ngOnInit() {
  }

  onCreateTeamClicked() {
    this.router.navigateByUrl('/createteam');
  }

  onInvitesClicked() {
    this.router.navigateByUrl('/invites');
  }

  onDeletePressed(id: number) {
    this.http.get('http://localhost:8000/api/deleteteam/' + id).subscribe((res) => {
      this.snackBar.open('Team deleted, but view isnt updating', 'Ok', {
        duration: 3000
      });
    });
    this.teams = [];
    this.loadData();
  }

  onModifyPressed(id: number) {
    this.router.navigateByUrl('/modifyteam/' + id);
  }

  onViewPressed(id: number) {
    this.router.navigateByUrl('/viewteam/' + id);
  }

}

interface Team {
  id: number
  name: string,
  description: string,
  color: any
  creatorId: number
}

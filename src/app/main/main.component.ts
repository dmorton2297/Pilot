import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrumBoardComponent } from '../scrum-board/scrum-board.component';
import { BacklogComponent } from '../backlog/backlog.component';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';
import { MatTabChangeEvent } from '@angular/material';

import { PerformanceDashboardComponent } from '../performance-dashboard/performance-dashboard.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public teams: Team[];
  public viewOptions: String[] = ['Me'];
  public selectedViewOption: String = this.viewOptions[0];
  public teamsLoaded: boolean = false;

  @ViewChild(ScrumBoardComponent) scrum;
  @ViewChild(BacklogComponent) backlog;
  @ViewChild(PerformanceDashboardComponent) performanceDashboard;
  constructor(private http: Http, private auth: AuthService, private state: StateService) { 
    this.http.get('http://localhost:8000/api/getjoinedteams/' + this.auth.getUserId()).subscribe((res) => {
      this.teams = res.json() as Team[];
      for (var i = 0; i < this.teams.length; i++) {
        this.viewOptions.push(this.teams[i].name);
      }
      this.teamsLoaded = true;
    });
  }

  onTabClick(event: MatTabChangeEvent) {
    if (event.index == 2) {
      this.performanceDashboard.visible = true;
    } else {
      this.performanceDashboard.visible = false;
    }
  }

  ngOnInit() {
    this.receiveSignal("hoopla");
  }

  onMenuItemPressed(teamName) {
    let stateId = 0;
    for (var i = 0; i < this.teams.length; i++) {
      let currTeam = this.teams[i];
      if (currTeam.name == teamName) {
        stateId = currTeam.id;    
        this.state.updateState(stateId);
        console.log(stateId);
        this.selectedViewOption = teamName;
        this.receiveSignal("update");
        return;

      }
    }

    this.selectedViewOption = teamName;
    this.state.updateState(0);
    this.receiveSignal("update");

  }

  receiveSignal($event) {
    this.backlog.loadData();
    this.scrum.loadData();
  }

}

interface Team {
  id: number
  name: string,
  description: string,
  color: any
  creatorId: number
}
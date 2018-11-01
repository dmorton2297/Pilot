import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrumBoardComponent } from '../scrum-board/scrum-board.component';
import { BacklogComponent } from '../backlog/backlog.component';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public teams: Team[];
  public viewOptions: String[] = ['Me'];
  public teamsLoaded: boolean = false;

  @ViewChild(ScrumBoardComponent) scrum;
  @ViewChild(BacklogComponent) backlog;
  constructor(private http: Http, private auth: AuthService) { 
    this.http.get('http://localhost:8000/api/getjoinedteams/' + this.auth.getUserId()).subscribe((res) => {
      this.teams = res.json() as Team[];
      for (var i = 0; i < this.teams.length; i++) {
        this.viewOptions.push(this.teams[i].name);
      }
      this.teamsLoaded = true;
    });
  }

  ngOnInit() {
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
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  public teams: Team[];
  public displayedColumns: String[] = ['id', 'name', 'description', 'created'];

  constructor(private router: Router, private http: Http, private auth: AuthService) { 
    this.http.get('http://localhost:8000/api/getusersteams/' + this.auth.getUserId()).subscribe((res) => {
      this.teams = res.json() as Team[];
    });
  }

  ngOnInit() {
  }

  onCreateTeamClicked() {
    this.router.navigateByUrl('/createteam');
  }

}

interface Team {
  name: string,
  description: string,
  invitemsg: string,
  color: any
  creatorId: number
}
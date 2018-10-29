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
  public displayedColumns: String[] = ['id', 'name', 'description', 'created', 'actions'];

  constructor(private router: Router, private http: Http, private auth: AuthService) { 
    this.http.get('http://localhost:8000/api/getjoinedteams/' + this.auth.getUserId()).subscribe((res) => {
      this.teams = res.json() as Team[];
    });
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

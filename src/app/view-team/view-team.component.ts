import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {

  teamId: string;
  team: Team;
  public teamName: string = "";
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: Http) { 
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe((res) => {
      console.log(res.json);
      var temp = res.json() as Team[];
      this.team = temp[0];
      this.teamName = this.team.name;
      console.log(this.teamName);
    });
  }

  ngOnInit() {
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


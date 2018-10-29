import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {

  public teamId: String;
  public team: Team;
  public teamName: String = "";
  public teamDescription: String = "";
  
  public users: User;
  
  @Output() signalEvent = new EventEmitter<string>();

  constructor(private router: Router, private http: Http, private activatedRoute: ActivatedRoute) {
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe((res)=>{
      this.team = res.json() as Team;
      this.team = this.team[0];
      this.teamName = this.team.name;
      this.teamDescription = this.team.description;
      console.log(this.team.name);
    });
    this.http.get('http://localhost:8000/api/teammembers/' + this.teamId).subscribe((res) => {
      this.users = res.json() as User;
    });
 
  }
  
   updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }
  
  onDeletePressed(id) {
	  this.http.get('http://localhost:8000/api/teamremove/'+id+'/'+ this.teamId).subscribe();
	  this.updateSignal();
  }

  ngOnInit() {
  }

}

interface Team {
  name: String,
  description: String,
  invitemsg: String,
  color: any
  creatorId: number

}

interface User {
	userid: number,
	name: String,
	email: String,
}

import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
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
  public teamDescription: String = "";
  public users: User;

  public dialog;  
  @Output() signalEvent = new EventEmitter<string>();

  constructor(private router: Router, private http: Http, private activatedRoute: ActivatedRoute) {
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe((res) => {
      console.log(res.json);
      var temp = res.json() as Team[];
      this.team = temp[0];
      this.teamName = this.team.name;
      console.log(this.teamName);
    });
	this.http.get('http://localhost:8000/api/teammembers/' + this.teamId).subscribe((res) =>{
		
	});

    this.http.get('http://localhost:8000/api/teammembers/' + this.teamId).subscribe((res) => {
      this.users = res.json() as User;
    });
    this.dialog = MatDialog;
  }
  
   updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }
  
  onDeletePressed(id) {
	  this.http.get('http://localhost:8000/api/teamremove/'+id+'/'+ this.teamId).subscribe();
	  this.updateSignal();

    const dialogConfirm = this.dialog.open(ConfirmDeleteDialog);
    dialogConfirm.afterClosed().subscribe(result => {
      if (result == true) {
        this.http.get('http://localhost:8000/api/teamremove/' + id + '/' + this.teamId).subscribe();
        this.updateSignal();

      }
      });
  }

  ngOnInit() {
  }

  onInviteUsers() {
    this.router.navigateByUrl('/inviteToTeam/' + this.teamId);
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


interface User {
	id: number,
	name: String,
	email: String,
}

interface User {
	userid: number,
	name: String,
	email: String,
}

interface User {
	userid: number,
	name: String,
	email: String,
}

@Component ({
  selector: 'confirm-delete-dialog',
  templateUrl: 'confirm-delete-dialog.html',
})
export class ConfirmDeleteDialog {}

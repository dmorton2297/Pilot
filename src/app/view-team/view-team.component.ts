import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';


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
  public displayedColumns: String[] = ['id', 'name', 'email', 'actions', 'favorite'];
  public users: User[];
  toggled: boolean = false;

  public dialog;
  
  @Output() signalEvent = new EventEmitter<string>();
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: Http, private auth: AuthService) { 
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe((res) => {
      console.log(res.json);
      var temp = res.json() as Team[];
      this.team = temp[0];
      this.teamName = this.team.name;
      this.teamDescription = this.team.description;
      console.log(this.teamName);
    });
    this.http.get('http://localhost:8000/api/getteammembers/' + this.teamId).subscribe((res) => {
      this.users = res.json() as User[];
      console.log(this.users);
    });
    this.dialog = MatDialog;
  }
  
   updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }
  
  onDeletePressed(id) {
    const dialogConfirm = this.dialog.open(ConfirmDeleteDialog);
    dialogConfirm.afterClosed().subscribe(result => {
      if (result == true) {
        this.http.get('http://localhost:8000/api/teamremove/' + id + '/' + this.teamId).subscribe();
        this.updateSignal();

      }
      });
  }

  updateFavorite(favorite: boolean, id: number) {
    console.log(favorite);
    if (favorite) {
      let request : Favorite = {
        userid: this.auth.getUserId(),
        favoriteid : id
      }
      this.http.post('http://localhost:8000/api/addFavorite/', request).subscribe((res) => {
        console.log(res);
      });
    } else {
      // Remove favorite
    }
  }

  ngOnInit() {
  }

  onInviteUsers() {
    this.router.navigateByUrl('/inviteToTeam/' + this.teamId);
  }

}


  
interface Favorite {
  userid : number,
  favoriteid : number
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
	email: String,  
  memberName: String,
  teamId: number,
  teamName: String
}

@Component ({
  selector: 'confirm-delete-dialog',
  templateUrl: 'confirm-delete-dialog.html',
})
export class ConfirmDeleteDialog {}

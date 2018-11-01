import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog, SELECT_PANEL_INDENT_PADDING_X } from '@angular/material';
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
  public favs: Favorite[];

  // Buttons will check the index in the array corresponding the the element.id and if it is true the button
  // will automatically be pressed.
  public toggle: boolean[] = []; 
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

    // Initialize toggle array to false
    for (var i = 0; i < 1000; i++) {
      this.toggle[i] = false;
    }

    this.http.get('http://localhost:8000/api/getteammembers/' + this.teamId).subscribe((res) => {
      this.users = res.json() as User[];

    });

    //http://localhost:8000/api/getallfav

    // Gets all the favorites for a user. userid is the current user, favorite id is the id of the favorited user
    this.http.get('http://localhost:8000/api/checkfavorite/' + this.auth.getUserId() + '/' + 1).subscribe((res) => {
      this.favs = res.json() as Favorite[];
      // An attempt at saving which users should have the favorite button pressed when page loads
      for (var i = 0; i < this.favs.length ; i++) {
        for(var j = 0; j < this.users.length; i++) {
          if (this.favs[i].favoriteid == this.users[j].id) {
            this.toggle[this.users[j].id] = true;
          }
        }
      }

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

  updateFavorite(id: number) {

      console.log(this.favs);
      console.log(this.toggle);
  
    if (this.toggle[id] == false || this.toggle[id] == undefined) {
      let request : Favorite = {
        userid: this.auth.getUserId(),
        favoriteid : id
      }
      this.http.post('http://localhost:8000/api/addFavorite/', request).subscribe((res) => {
        console.log(res);
        this.toggle[id] = true
      });
    } else {
      this.http.get('http://localhost:8000/api/removeFavorite/' + this.auth.getUserId() + "/" + id).subscribe((res) => {
        console.log(res);
        this.toggle[id] = false;
     });
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

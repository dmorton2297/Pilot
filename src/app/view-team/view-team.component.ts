import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, SELECT_PANEL_INDENT_PADDING_X } from '@angular/material';
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
  public displayedColumns: String[] = ['id', 'name', 'email', 'role', 'actions', 'favorite'];
  public users: User[];
  public role: string;
  public favs: Favorite[] = [];
  public toggle: boolean[] = []; 

  public canKick = false;
  public canChangeRole = false;
  public canMessage = false;

  // Buttons will check the index in the array corresponding the the element.id and if it is true the button
  // will automatically be pressed.
  public dialog;
  
  @Output() signalEvent = new EventEmitter<string>();
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: Http, public snackBar: MatSnackBar, private auth: AuthService) { 
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe((res) => {
      console.log(res.json);
      var temp = res.json() as Team[];
      this.team = temp[0];
      this.teamName = this.team.name;
      this.teamDescription = this.team.description;
      console.log(this.teamName);
      this.getTeamMembers();
      this.loadViewingPermissions();

      for (var i = 0; i < 1000; i++) {
        this.toggle[i] = false;
       }
    
      // Gets all the favorites for a user. userid is the current user, favorite id is the id of the favorited user
      this.http.get('http://localhost:8000/api/getuserfavorites/' + this.auth.getUserId()).subscribe((res) => {
        this.favs = res.json() as Favorite[];
        if (res.json() != -1) {
          for (var i = 0; i < this.favs.length ; i++) {
            for(var j = 0; j < this.users.length; j++) {
              if (this.favs[i].favoriteid == this.users[j].id) {
                this.toggle[this.users[j].id] = true;
              }
            }
          }
        }
      });
    });
    this.dialog = MatDialog;
  }

  loadViewingPermissions() {
    let request: GetRoleRequest = {
      teamid: this.teamId,
      userid: ''+this.auth.getUserId()
    }
    console.log('yes' + request);
    this.http.post('http://localhost:8000/api/getrole', request).subscribe((res) => {
      let temp = res.json() as Role[];
      if (temp.length > 0) {
        this.role = temp[0].role;
        console.log(this.role);
        if (this.role == 'Owner') {
          this.canChangeRole = true;
          this.canKick = true;
          this.canMessage = true;
        } else if (this.role == 'Manager') {
          this.canKick = true;
          this.canMessage = true;
        } else {
        }
      }
    });
  }

  hideMessageTeam() {
    return this.canMessage;
  }

  getTeamMembers() {

    // Initialize toggle array to false
    for (var i = 0; i < 1000; i++) {
      this.toggle[i] = false;
    }

    this.http.get('http://localhost:8000/api/getteammembers/' + this.teamId).subscribe((res) => {
      this.users = res.json() as User[];

    });

    //http://localhost:8000/api/getallfav

    // Gets all the favorites for a user. userid is the current user, favorite id is the id of the favorited user
    this.http.get('http://localhost:8000/api/checkfavorite/' + this.auth.getUserId()).subscribe((res) => {
      this.favs = res.json() as Favorite[];
      // An attempt at saving which users should have the favorite button pressed when page loads
      console.log(this.favs);
      for (var i = 0; i < this.favs.length ; i++) {
        for(var j = 0; j < this.users.length; j++) {
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
    if (confirm('Are you sure you want to remove this team member?')) {
      this.http.get('http://localhost:8000/api/teamremove/' + id + '/' + this.teamId).subscribe((res) => {
        this.snackBar.open('Member removed', 'Ok', {
          duration: 3000
        });
  
        this.getTeamMembers();
      });
    }
    
  }

  onFavoritePressed(id) {
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

  onMessagePressed(id) {
    this.router.navigateByUrl('/sendmessagetouser/' + id);
  }

  onManageRolePressed(id) {
    this.router.navigateByUrl('/managerole/' + id + '/' + this.teamId);
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

  onMessageTeam() {
    this.router.navigateByUrl('/sendmessagetoteam/' + this.teamId);
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

interface Favorite {
  userid: number,
  favoriteid: number
}

interface User {
  id: number,
  email: String,  
  role: String,
  memberName: String,
  teamId: number,
  teamName: String
}

interface GetRoleRequest {
  userid: string,
  teamid: string,
}

interface Role {
  role: string,
  userid: string,
  teamid: string
}
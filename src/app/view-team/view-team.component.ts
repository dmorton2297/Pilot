import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
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
  public displayedColumns: String[] = ['id', 'name', 'email', 'role', 'actions'];
  public users: User[];
  public role: string;

  public canKick = false;
  public canChangeRole = false;
  public canMessage = false;

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
        } else if (this.role == 'Manager') {
          this.canKick = true;
        } else {
        }
      }
    });
  }

  getTeamMembers() {
    this.http.get('http://localhost:8000/api/getteammembers/' + this.teamId).subscribe((res) => {
      this.users = res.json() as User[];
      console.log(this.users);
    });
  }
  
   updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }
  
  onDeletePressed(id) {
    this.http.get('http://localhost:8000/api/teamremove/' + id + '/' + this.teamId).subscribe((res) => {
      this.snackBar.open('Member removed', 'Ok', {
        duration: 3000
      });

      this.getTeamMembers();
    });
  }

  onMessagePressed(id) {
    this.router.navigateByUrl('/sendmessagetouser/' + id);
  }

  onManageRolePressed(id) {
    this.router.navigateByUrl('/managerole/' + id + '/' + this.teamId);
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
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import {Location} from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-manage-team-role',
  templateUrl: './manage-team-role.component.html',
  styleUrls: ['./manage-team-role.component.css']
})
export class ManageTeamRoleComponent implements OnInit {
  public username = "test";
  public teamName;
  public user: User;
  public roleForm : FormControl = new FormControl();
  public options = ['Owner', 'Manager', 'Member'];

  public role = this.fb.group({
    role: ['']
  });

  public teamId;
  public userId;
  public userRole: Role;
  public displayedRole: string;
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private http: Http, private loc: Location, public snackBar: MatSnackBar) { 
    this.teamId = this.activatedRoute.snapshot.paramMap.get('teamid');
    this.userId = this.activatedRoute.snapshot.paramMap.get('userid');

    this.loadRole();
    this.loadUser();
    this.loadTeamName();
  }

  loadRole() {
    let request : GetRoleRequest = {
      teamid: this.teamId,
      userid: this.userId
    }
    this.http.post('http://localhost:8000/api/getrole', request).subscribe((res) => {
      let temp = res.json() as Role[];
      if (temp.length > 0) {
        this.userRole = temp[0];
        this.displayedRole = this.userRole.role;
      } 
    });
  }


loadUser() {
  this.http.get('http://localhost:8000/api/getuser/' + this.userId).subscribe((res) => {
    let temp = res.json() as User[];
    if (temp.length > 0) {
      this.user = temp[0];
      this.username = this.user.name;
    }
  });
}

loadTeamName() {
  this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe((res) => {
    let temp = res.json() as Team[];
    if (temp.length > 0) {
      this.teamName = temp[0].name;
    }
  });
}

  ngOnInit() {
  }

  onSubmit() {
    console.log('On submit called');
    let r : Role = {
      role: this.role.get('role').value, 
      userid: this.userId, 
      teamid: this.teamId
    }

    this.http.post('http://localhost:8000/api/setrole', r).subscribe((res) => {
      this.snackBar.open('Role Updated', 'Ok', {
        duration: 3000
      });
    })
  }

  onCancel() {
    this.loc.back();
  }

}

interface User {
  id: number,
  name: string,
  email: string,
  email_verified_at: string,
  remember_token: number,
  role: string,
  created_at: string,
  updated_at: string
}


interface Role {
  role: string,
  userid: string,
  teamid: string
}

interface GetRoleRequest {
  userid: string,
  teamid: string,
}

interface Team {
  name: string
}
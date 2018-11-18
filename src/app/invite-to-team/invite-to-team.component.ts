import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatSnackBar} from '@angular/material';
import { UserMessagesComponent } from '../user-messages/user-messages.component';




@Component({
  selector: 'app-invite-to-team',
  templateUrl: './invite-to-team.component.html',
  styleUrls: ['./invite-to-team.component.css']
})
export class InviteToTeamComponent implements OnInit {
  public taskForm = this.fb.group({
    email: ['', Validators.required],
    invmessage: ['', Validators.required]
  });
  public teamName: string = 'Software Engineering Team';
  public teamId: string;
  public id : number;
  public currentInvites : Invite[];
  public displayedColumns: String[] = ['name', 'email'];
  public users: User[] = [];
  public favorites: Favorite[] = [];

  constructor(private fb: FormBuilder, private http: Http, private activatedRoute: ActivatedRoute, private auth: AuthService, private router: Router, public snackBar: MatSnackBar) { 
    this.teamId = this.activatedRoute.snapshot.paramMap.get('teamid'); 
    this.loadTeamName();
    this.loadCurrentInvites();
    this.loadAutoComplete();
  }

  user : User;
  loadAutoComplete() {
    this.http.get('http://localhost:8000/api/getuserfavorites/' + this.auth.getUserId()).subscribe((res) => {
      if (res.json() != "" && res.json() != -1) {
        this.favorites = res.json() as Favorite[];
        console.log("favorites");
        console.log(this.favorites);
        for (var i = 0; i < this.favorites.length; i++) {
          
          this.http.get('http://localhost:8000/api/getuser/' + this.favorites[i].favoriteid).subscribe((res) => {
            this.user = res.json() as User;
            console.log("User found");
            console.log(this.user);
            this.users.push(this.user);
          });
        }
      }
      console.log("Autocomplete loading");
      console.log(this.users);
    });

  }

  loadTeamName() {
    this.http.get('http://localhost:8000/api/getteam/'+this.teamId).subscribe((res) => {
      let r = res.json() as Team[];
      this.teamName = r[0].name;
      this.taskForm.patchValue({invmessage: r[0].invitemsg});
    });
  }

  loadCurrentInvites() {
    this.http.get('http://localhost:8000/api/allsentinvites/' + this.auth.getUserId()).subscribe(res => {
      let r = res.json() as Invite[];
      this.currentInvites = [];
      for (var i = 0; i < r.length; i++) {
        if (''+r[i].teamid == this.teamId) {
          this.currentInvites.push(r[i]);
        }
      }
    });
  }

 
  ngOnInit() {
  }

  onSubmit() {
    this.http.get('http://localhost:8000/api/getuserid/' + (this.taskForm.get('email').value as string)).subscribe(res => {
      let temp = res.json() as Id[];
      if (temp[0] == null) {
        return;
      }
      console.log(temp[0].id);
      this.id = temp[0].id;
      let a : InviteRequest = {
        senderid: ''+this.auth.getUserId(),
        recipientid: ''+this.id, 
        teamid: this.teamId
      }
      this.http.post('http://localhost:8000/api/inviteuser', a).subscribe(res => {
        this.snackBar.open('Invitation Sent', 'Ok', {
          duration: 3000
        });

        this.loadCurrentInvites();
      });


    });
  }

  onCancel() {
    this.router.navigateByUrl('/viewteam/' + this.teamId);
  }

}

interface Favorite {
  userid: number,
  favoriteid: number
}

interface InviteRequest {
  senderid: string,
  recipientid: string,
  teamid: string
}

interface Invite {
  email: string,
  name: string
  teamid: number
}

interface Id {
  id: number
}

interface User {
  id: number,
  name: string,
  email: string
}

interface Team {
  name: string,
  description: string,
  invitemsg: string,
  color: any
  creatorId: number
}


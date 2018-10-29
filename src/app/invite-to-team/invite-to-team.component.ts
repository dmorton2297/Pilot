import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatSnackBar} from '@angular/material';




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

  constructor(private fb: FormBuilder, private http: Http, private activatedRoute: ActivatedRoute, private auth: AuthService, private router: Router, public snackBar: MatSnackBar) { 
    this.teamId = this.activatedRoute.snapshot.paramMap.get('teamid'); 
    this.loadTeamName();
    this.loadCurrentInvites();
  }

  loadTeamName() {
    this.http.get('http://localhost:8000/api/getteam/'+this.teamId).subscribe((res) => {
      let r = res.json() as Team[];
      this.teamName = r[0].name;
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

interface Team {
  name: string,
  description: string,
  invitemsg: string,
  color: any
  creatorId: number
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-message-to-team',
  templateUrl: './message-to-team.component.html',
  styleUrls: ['./message-to-team.component.css']
})
export class MessageToTeamComponent implements OnInit {
  message = this.fb.group({
    message: ['']
  });

  public test = "test";
  public name = "Temp Name";
  public displayName = "Temp Name"
  public options = [];
  public sender : number;
  public receiver : string;
  public selectedTeam : Team[] = [];
  public teamMembers : User[] = [];
  public messageForm : FormControl = new FormControl();

  constructor(private fb: FormBuilder, private http: Http, private activatedRoute: ActivatedRoute, private location: Location, private auth: AuthService, public snackBar: MatSnackBar, private router: Router) { 
    this.receiver = this.activatedRoute.snapshot.paramMap.get('teamid');

    this.sender = this.auth.getUserId();
    //this.displayName = 
    this.http.get('http://localhost:8000/api/teammembers/' + this.receiver).subscribe((res) => {
      this.teamMembers = res.json() as User[];
    });
    this.http.get('http://localhost:8000/api/getteamname/' + this.receiver).subscribe((res) => {
      this.selectedTeam = res.json() as Team[];
      this.displayName = this.selectedTeam[0].name;
    }); 
  }

  ngOnInit() {}

  onSubmit() {
    let recipientId = -1;
    for (var i = 0; i < this.teamMembers.length; i++) {
      recipientId = this.teamMembers[i].id;
      if (recipientId = this.sender) {
        continue;
      }
      let request : NewMessage = {
        recipient: recipientId,
        message: this.message.get('message').value as string,
        sender: this.sender
      }
      this.http.post('http://localhost:8000/api/newmessage', request).subscribe((res) => {
      console.log(res);
    });
    }
    this.snackBar.open('Team message sent', 'Ok', {
      duration: 3000
    });   
  }

  onCancel() {
    this.router.navigateByUrl('/viewteam/' + this.receiver);
  }

}

interface NewMessage {
  recipient: number,
  message: string,
  sender: number
}

interface Team {
  name: string,
  description: string,
  invitemsg: string,
  color: any,
  creatorId: number
}

interface User {
  id: number,
  name: string,
  email: string,
  email_verified_at: string,
  remember_token: number,
  created_at: string,
  updated_at: string
}
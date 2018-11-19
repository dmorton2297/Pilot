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
  public teams : Team[] = [];
  public displayedUsers: Team[] = [];
  public messageForm : FormControl = new FormControl();

  constructor(private fb: FormBuilder, private http: Http, private activatedRoute: ActivatedRoute, private location: Location, private auth: AuthService, public snackBar: MatSnackBar, private router: Router) { 
    let recieverId = this.activatedRoute.snapshot.paramMap.get('id');

    this.sender = this.auth.getUserId();
    //change to get teams of user
    this.http.get('http://localhost:8000/api/getuser/' + recieverId).subscribe((res) => {
      this.teams = res.json() as Team[];
      this.name = this.teams[0].name + '  |  ' + this.teams[0].description;
      this.displayName = this.teams[0].name;
    });
  }

  ngOnInit() {}

  ngOnSubmit() {
    /*
    let request : NewMessage = {
      recipient: this.teams[0].id,
      message: this.message.get('message').value as string,
      sender: this.sender
    }
    if (this.users.find(x=>x.name == this.receiver) != undefined) {
        //user is found in user table
    }
    this.http.post('http://localhost:8000/api/newmessage', request).subscribe((res) => {
      console.log(res);
      this.snackBar.open('Message sent', 'Ok', {
        duration: 3000
      });
    });
    */
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
  creatorId: number,
  color: string
}
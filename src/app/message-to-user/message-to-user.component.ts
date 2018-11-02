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
  selector: 'app-message-to-user',
  templateUrl: './message-to-user.component.html',
  styleUrls: ['./message-to-user.component.css']
})
export class MessageToUserComponent implements OnInit {
  message = this.fb.group({
    message: ['']
  });

  public test = "test";
  public name = "Temp Name";
  public displayName = "Temp Name"
  public options = [];
  public sender : number;
  public receiver : string;
  public users : User[] = [];
  public displayedUsers: User[] = [];
  public messageForm : FormControl = new FormControl();
  constructor(private fb: FormBuilder, private http: Http, private activatedRoute: ActivatedRoute, private auth: AuthService, public snackBar: MatSnackBar, private router: Router) { 
    let recieverId = this.activatedRoute.snapshot.paramMap.get('id');

    this.sender = this.auth.getUserId();
    this.http.get('http://localhost:8000/api/getuser/' + recieverId).subscribe((res) => {
      this.users = res.json() as User[];
      this.name = this.users[0].name + '  |  ' + this.users[0].email;
      this.displayName = this.users[0].name;
    });
  }



  ngOnInit() {
  }



  onSubmit() {
    //how to get current user's ID and name(email?)
    //receiver and sender given by name or email or uID?
    //get receiving user's name and find his id
    //this.msg = this.newMessage.get('message').value as string;
    //alert(this.newMessage.get('receiver'))

    let request : NewMessage = {
      recipient: this.users[0].id,
      message: this.message.get('message').value as string,
      sender: this.sender
    }
    if (this.users.find(x=>x.name == this.receiver) != undefined) {
        //user is found in user table
    }
    this.http.post('http://localhost:8000/api/newmessage', request).subscribe((res) => {
      console.log(res);
    });

    
  }

  onCancel() {
    this.message.reset();
    this.router.navigateByUrl('/messages');
  }



}

interface NewMessage {
  recipient: number,
  message: string,
  sender: number
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
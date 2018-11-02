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
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})

export class NewMessageComponent {
  newMessage = this.fb.group({
    receiver: [''],
    //receiver: [''],
    message: ['', Validators.required]
    //message: ['']
  });

  public uID : number;
  public sender : number;
  public receiver : string;
  public users : User[] = [];
  public usernames : string[] = [];
  public userids : number[] = [];
  public searchResult = [];
  public messageForm : FormControl = new FormControl();
  filteredUsers: Observable<User[]>;
  
  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.sender = this.auth.getUserId();
    this.http.get('http://localhost:8000/api/getallusers').subscribe((res) => {
      this.users = res.json() as User[];
    });
    this.filteredUsers = this.messageForm.valueChanges
      .pipe(
        startWith(''),
        map(user => user ? this.filterUsers(user) : this.users.slice())
      );
      
  }

  onSubmit() {
    //how to get current user's ID and name(email?)
    //receiver and sender given by name or email or uID?
    //get receiving user's name and find his id
    //this.msg = this.newMessage.get('message').value as string;
    //alert(this.newMessage.get('receiver'))

    
    if (this.users.find(x=>x.name == this.receiver) != undefined) {
        //user is found in user table
    }
    let nameReq: NameRequest = {
      name : this.receiver
    }
    this.http.post('http://localhost:8000/api/getuseridfromname', nameReq).subscribe((res) => {
      let temp = res.json() as NameResponse[];
      if (temp.length == 0) {
        return;
      } 

      let id = temp[0].id;
      let request : NewMessage = {
        receiver: id,
        message: this.newMessage.get('message').value as string,
        sender: this.sender
      }
      this.http.post('http://localhost:8000/api/newmessage', request).subscribe((res) => {
      console.log(res);
      });
    });
  }

  onCancel() {
    this.newMessage.reset();
    this.router.navigateByUrl('/usermessages');
  }

  private filterUsers(value: string): User[] {
    if (value != undefined) {
      const name = value.toLowerCase();
      //this.receiver = value;
      //this.newMessage.controls['receiver'].setErrors({incorrect: false});
      return this.users.filter(user => user.name.toLowerCase().indexOf(name) === 0);
    }
  }


}

interface NewMessage {
  receiver: number,
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

interface NameRequest {
  name: string
}

interface NameResponse {
  id: number
}

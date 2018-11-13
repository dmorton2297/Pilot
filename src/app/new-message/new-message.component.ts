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

export class NewMessageComponent implements OnInit {
  newMessage = this.fb.group({
    receiver: [''],
    message: ['']
  });

  public options = [];
  public sender : number;
  public receiver : string;
  public users : User[] = [];
  public displayedUsers: User[] = [];
  public messageForm : FormControl = new FormControl();
  filteredUsers: Observable<User[]>;
  
  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.sender = this.auth.getUserId();
    this.http.get('http://localhost:8000/api/getallusers').subscribe((res) => {
      this.users = res.json() as User[];
      this.displayedUsers = this.users;
      this.loadOptions();
    });
      
  }

  loadOptions() {
    this.options = [];
    for (var i = 0; i < this.displayedUsers.length; i++) {
      this.options.push(this.displayedUsers[i].name + '  |  ' + this.displayedUsers[i].email);
    }
  }

  ngOnInit() {
    var input = document.getElementById('to');

    // add event listener to the too field to capture every time the user updates the input
    let that = this;
    input.addEventListener('input', function(){   
      console.log(that.newMessage.get('receiver').value as string);
      that.filterUsers(that.newMessage.get('receiver').value as string);
    });
  }

  onSubmit() {
    //how to get current user's ID and name(email?)
    //receiver and sender given by name or email or uID?
    //get receiving user's name and find his id
    //this.msg = this.newMessage.get('message').value as string;
    //alert(this.newMessage.get('receiver'))
    let recipient = this.newMessage.get('receiver').value;
    let recipientId = -1;
    for (var i = 0; i < this.users.length; i++) {
      if (recipient.includes(this.users[i].name) && recipient.includes(this.users[i].email)) {
        recipientId = this.users[i].id;
      }
    }

    if (recipientId == -1) {
      window.alert('The user could not be found')
      return;
    }

    let request : NewMessage = {
      recipient: recipientId,
      message: this.newMessage.get('message').value as string,
      sender: this.sender
    }
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
        recipient: id,
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
    this.router.navigateByUrl('/messages');
  }

  private filterUsers(exp: string) {
    this.displayedUsers = [];
    for (var i = 0; i < this.users.length; i++) {
      let n = this.users[i].name;
      let e = this.users[i].email;


      if (n.includes(exp) || e.includes(exp)) {
        this.displayedUsers.push(this.users[i]);
      }
    }

    console.log(this.displayedUsers);
    this.loadOptions();
  }

  displayFn(user?: string): string | undefined {
    return user ? user : undefined;
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

interface NameRequest {
  name: string
}

interface NameResponse {
  id: number
}

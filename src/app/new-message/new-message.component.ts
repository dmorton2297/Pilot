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
  public userForm = this.fb.group({
    userInput : null
  })
  //public filteredUsers = this.userForm
    //.get('userInput')
    //.valueChanges
    //.pipe(
    //    debounceTime(300),
     //   switchMap(value => this.appService.search({name : value}, 1))
    //);
  
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
    let request : NewMessage = {
      receiver: this.newMessage.get('receiver').value as string,
      message: this.newMessage.get('message').value as string,
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
    this.newMessage.reset();
    this.router.navigateByUrl('/');
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
  receiver: string,
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})

export class NewMessageComponent {
  newMessage = this.fb.group({
    receiver: ['', Validators.required],
    message: ['', Validators.required]
  });

  public uID : number;
  //public msg : string;
  
  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.uID = 0;
  }

  onSubmit() {
    //how to get current user's ID and name(email?)
    //receiver and sender given by name or email or uID?
    //this.msg = this.newMessage.get('message').value as string;
    let request : NewMessage = {
      receiver: this.newMessage.get('receiver').value as string,
      message: this.newMessage.get('message').value as string,
      sender: "Blake Thomas",
      id: this.uID
    }

    this.http.post('http://localhost:8000/api/newMessage' + this.uID, request).subscribe((res) => {
      console.log(res);
    });
  }

  onCancel() {
    this.newMessage.reset();
    this.router.navigateByUrl('/');
  }


}

interface NewMessage {
  receiver: string,
  message: string,
  sender: string,
  id: number
}

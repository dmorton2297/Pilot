import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent {

  public uID : number;
  public messages : Message[] = [];
  column_names: string[] = ['from', 'message']


  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) { 
    //get uID, get from 'message' table where id = uID
    this.uID = this.auth.getUserId();
    this.http.get('http://localhost:8000/api/getmessages' + this.uID).subscribe((res) => {
      this.messages = res.json() as Message[];
    });
  }



}

interface Message {
  id: number,
  message: string,
  sender: number,
  receiver: number,
  team: number
}
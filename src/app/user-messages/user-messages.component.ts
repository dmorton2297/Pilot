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
export class UserMessagesComponent implements OnInit {

  public uID : number;
  public messages : Message[] = [];
  displayedColumns: string[] = ['sender', 'msg']


  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.loadData();
  }

  ngOnInit() {
    this.loadData();
  }

  onNewMessage() {
    this.router.navigateByUrl('/newmessage');
  }

  loadData() {
    this.uID = this.auth.getUserId();
    //this.uID = 1;
    //alert(this.uID);
    this.http.get('http://localhost:8000/api/getmessages/' + this.uID).subscribe((res) => {
    //this.http.get('http://localhost:8000/api/getmessages').subscribe((res) => {
    this.messages = res.json() as Message[];
    console.log(res);
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
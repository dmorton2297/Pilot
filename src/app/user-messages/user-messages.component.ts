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
  displayedColumns: string[] = ['sender', 'message', 'actions'];


  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private activatedRoute: ActivatedRoute, private router: Router) { 
    //get uID, get from 'message' table where id = uID
    this.uID = this.auth.getUserId();
    //this.uID = 1;
    //alert(this.uID);
    this.loadMessages();
  }

  loadMessages() {
    this.http.get('http://localhost:8000/api/getmessages/' + this.uID).subscribe((res) => {
      //this.http.get('http://localhost:8000/api/getmessages').subscribe((res) => {
        console.log(res);
        this.messages = res.json() as Message[];
        this.checkExpiredMessages();
  
      });
  }

  checkExpiredMessages() {
    for (var i = 0; i < this.messages.length; i++) {
      console.log(this.messages[i].created_at);
      let date = new Date(this.messages[i].created_at);
      let todayDate = new Date(Date.parse(Date()));
      var seconds = (todayDate.getTime() - date.getTime()) / 1000;

      // on week delete condition
      if (seconds > 604800) {
        this.onDeletePressed(this.messages[i].id);
      }
    }
  }

  onNewMessagePressed() {
    this.router.navigateByUrl('/newmessage');
  }

  onReplyPressed($id) {
    this.router.navigateByUrl('/sendmessagetouser/' + $id);
  }

  onDeletePressed(id) {
    this.http.get('http://localhost:8000/api/deletemessage/' + id).subscribe((res) => {
      this.loadMessages();
    });
  }


}

interface Message {
  id: number,
  message: string,
  sender: string,
  senderId: number,
  senderEmail: string,
  receiver: number,
  team: number,
  created_at: number,
  updated_at: number
}
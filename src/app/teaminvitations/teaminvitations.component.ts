import { Component, OnInit, Output } from '@angular/core';
import { Http } from '@angular/http';
import { EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-teaminvitations',
  templateUrl: './teaminvitations.component.html',
  styleUrls: ['./teaminvitations.component.css']
})
export class TeaminvitationsComponent {

  @Output() signalEvent = new EventEmitter<string>();
  
	public invites : Invites[] = [];
	public displayedColumns: String[] = ['id', 'senderName', 'senderEmail', 'teamName', 'teamId', 'actions'];
  
  constructor(private http: Http, private auth: AuthService) {
	this.loadData();
  }
  
  updateSignal() {
	  this.signalEvent.emit("SIG_UPDATE_INVITES");
  }
  
  loadData() {
	  this.http.get('http://localhost:8000/api/allrecievedinvites/' + this.auth.getUserId()).subscribe((res) =>  {
			this.invites = res.json() as Invites[];
			console.log(this.invites);
	  });  
  }
  
  onAcceptPressed(inviteId: number) {
	  var user = 0;
	  var team = 0;
		for (var i = 0; i < this.invites.length; i++) {
			if (this.invites[i].id == inviteId) {
				user = this.auth.getUserId();
				team = this.invites[i].teamId;
				this.http.get('http://localhost:8000/api/addteammember/'+user+'/'+team).subscribe(res => {
					this.http.get('http://localhost:8000/api/deleteinvite/'+inviteId).subscribe(r => {
						this.loadData();
					});

				});
			}
		}
  }
  
  onDeclinePressed(inviteId: number) {
	  for (var i = 0; i < this.invites.length; i++) {
			if (this.invites[i].id == inviteId) {
				this.http.get('http://localhost:8000/api/deleteinvite/'+inviteId).subscribe();
				this.updateSignal();
			}
		}
  }
  
  
}

interface Invites {
	id: number,
	email: string,
	senderName: string,
	teamId: number,
	teamName: string
}
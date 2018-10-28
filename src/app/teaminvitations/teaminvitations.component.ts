import { Component, OnInit, Output } from '@angular/core';
import { Http } from '@angular/http';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teaminvitations',
  templateUrl: './teaminvitations.component.html',
  styleUrls: ['./teaminvitations.component.css']
})
export class TeaminvitationsComponent {

  @Output() signalEvent = new EventEmitter<string>();
  
  public invites : Invites[] = [];
  
  constructor(private http: Http) {
	this.loadData();
  }
  
  updateSignal() {
	  this.signalEvent.emit("SIG_UPDATE_INVITES");
  }
  
  loadData() {
	  this.http.get('http://localhost:8000/api/teaminvites/0').subscribe((res) =>  {
		  this.invites = res.json() as Invites[];
	  });  
  }
  
  onAcceptClicked(inviteId: number) {
	  var user = 0;
	  var team = 0;
		for (var i = 0; i < this.invites.length; i++) {
			if (this.invites[i].id == inviteId) {
				user = this.invites[i].receiverid;
				team = this.invites[i].teamid;
				this.http.get('http://localhost:8000/api/addteammember/'+user+'/'+team);
				this.http.get('http://localhost:8000/api/deleteinvite/'+inviteId).subscribe();
				this.updateSignal();
			}
		}
  }
  
  onDeclineClicked(inviteId: number) {
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
	receiverid: number,
	teamid: number,
	teamname: string,
}
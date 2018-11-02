import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent {

  @Output() signalEvent = new EventEmitter<string>();

  public tasks : Task[] = [];
  public notStartedTasks : Task[];
  public startedTasks : Task[];
  public completedTasks : Task[];
  public displayedColumns : String[] = ['card'];
  constructor(private http: Http, private auth: AuthService, private state: StateService) {
    this.loadData();
   }

   updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }

  loadData() {
    if (this.state.getCurrentStateId() == 0) {
      this.http.get('http://localhost:8000/api/getusertasks/'+this.auth.id).subscribe((res) => {
        this.tasks = res.json() as Task[];
        this.processTableData();
        
      });
    } else {
      console.log('scrum board is here')
      this.http.get('http://localhost:8000/api/getteamtasks/'+this.state.getCurrentStateId()).subscribe((res) => {
        this.tasks = res.json() as Task[];
        this.processTableData();
       
      });
    }
    
  }


  processTableData() {
    this.notStartedTasks = [];
    this.startedTasks = [];
    this.completedTasks = [];
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].status == 0) {
        this.notStartedTasks.push(this.tasks[i]);
      } else if (this.tasks[i].status == 1) {
        this.startedTasks.push(this.tasks[i]);
      } else {
        this.completedTasks.push(this.tasks[i]);
      }
    }
  }
  

  sortTableName() {
	  
	   this.tasks.sort((a, b) => {
		if(a.name < b.name) {return -1;}
		if(a.name > b.name) {return 1;}
		return 0;
	  });
	  
	  this.notStartedTasks.sort((a, b) => {
		if(a.name < b.name) {return -1;}
		if(a.name > b.name) {return 1;}
		return 0;
	  });
	  
	  this.startedTasks.sort((a, b) => {
		if(a.name < b.name) {return -1;}
		if(a.name > b.name) {return 1;}
		return 0;
	  });
	  
	  this.completedTasks.sort((a, b) => {
		if(a.name < b.name) {return -1;}
		if(a.name > b.name) {return 1;}
		return 0;
	  });
  }
  
  sortTablePriority() {
  	  this.tasks.sort((a, b) => a.priority - b.priority);

	  this.notStartedTasks.sort((a, b) => a.priority - b.priority);
	  
	  this.startedTasks.sort((a, b) => a.priority - b.priority);
	  
	  this.completedTasks.sort((a, b) => a.priority - b.priority);
  
  }
  
   sortTableStatus() {
	   this.tasks.sort((a, b) => a.status - b.status);
   }
}

interface Task {
  id: number,
  name: string,
  description: string,
  priority: number,
  status: number,
  funcreq: any,
  estimate: number,
  timespent: number,
  teamid: number,
  creatorid: number,
  assigneduserid: number,
}

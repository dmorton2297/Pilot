import { Component, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent {

  public tasks: Task[] = [];
  public displayedColumns: String[] = ['id', 'name', 'description', 'priority', 'status', 'created', 'actions'];

  public sortByName = true;
  public sortByPriority = false;

  @Output() signalEvent = new EventEmitter<string>();

  constructor(private http: Http, private router: Router, private auth: AuthService) { 
    this.loadData();
  }

  onCreateTask() {
    this.router.navigateByUrl('/createtask');
  }

  updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }

  loadData() {
    this.http.get('http://localhost:8000/api/getusertasks/'+this.auth.id).subscribe((res) => {
      this.tasks = res.json() as Task[];
      if (this.sortByName) {
        this.sortTableName();
      } else if (this.sortByPriority) {
        this.sortTablePriority();
      }
    });
  }

  onStatusClicked(taskId: number) {
    var newStatus = 0;
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == taskId) {
        if (this.tasks[i].status == 0) {
          newStatus = 1;
        } else if (this.tasks[i].status == 1){
          newStatus = 2;
        } else {
          newStatus = 0;
        }
      }
    }
    let request : ChangeStatusRequest = {
      taskId : taskId,
      status: newStatus
    }

    this.http.post('http://localhost:8000/api/changestatus', request).subscribe((res) => {
      this.updateSignal();
    });
  }

  onDeletePressed(id) {
    this.http.get('http://localhost:8000/api/deletetask/' + id).subscribe();
    this.updateSignal();
  }

  onModifyPressed(id) {
    this.router.navigateByUrl('/modifytask/' + id);
  }

  onSortNamePressed(){
    this.sortByName = true;
    this.sortByPriority = false;
    this.updateSignal();
  }

  onSortPrioPressed(){
    this.sortByName = false;
    this.sortByPriority = true;
    this.updateSignal();
  }
  
	sortTableName() {
    var temp = this.tasks;
	 temp.sort((a, b) => {
	  if(a.name < b.name) {return -1;}
	  if(a.name > b.name) {return 1;}
	  return 0;
   });
   
   this.tasks = temp;
    }
   
    sortTablePriority() {
  	 this.tasks.sort((a, b) => a.priority - b.priority);
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
  created_at: number;
}

interface ChangeStatusRequest {
    taskId: number,
    status: number
}

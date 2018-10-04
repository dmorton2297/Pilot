import { Component, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent {

  public tasks: Task[] = [];
  public displayedColumns: String[] = ['id', 'name', 'description', 'priority', 'status', 'created'];

  @Output() signalEvent = new EventEmitter<string>();

  constructor(private http: Http, private router: Router) { 
    this.loadData();
  }

  onCreateTask() {
    this.router.navigateByUrl('/createtask');
  }

  updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }

  loadData() {
    this.http.get('http://localhost:8000/api/getusertasks/0').subscribe((res) => {
      this.tasks = res.json() as Task[];
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

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent implements OnInit {

  public tasks : Task[] = [];
  public notStartedTasks : Task[];
  public startedTasks : Task[];
  public completedTasks : Task[];
  public displayedColumns : String[] = ['card'];
  constructor(private http: Http) {
    this.http.get('http://localhost:8000/api/getusertasks/0').subscribe((res) => {
      this.tasks = res.json() as Task[];
      this.loadTableData();
    });
   }

  ngOnInit() {
  }

  loadTableData() {
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

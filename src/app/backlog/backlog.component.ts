import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent {

  public tasks: Task[] = [];
  public displayedColumns: String[] = ['id', 'name', 'description', 'priority', 'status', 'created'];

  constructor(private http: Http) { 
    this.http.get('http://localhost:8000/api/getusertasks/0').subscribe((res) => {
      this.tasks = res.json() as Task[];
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

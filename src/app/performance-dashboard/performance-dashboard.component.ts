import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-performance-dashboard',
  templateUrl: './performance-dashboard.component.html',
  styleUrls: ['./performance-dashboard.component.css']
})
export class PerformanceDashboardComponent implements OnInit {

  @Output() signalEvent = new EventEmitter<string>();
  visible: boolean = false;
  public sprints: Sprint[] = [];


  constructor(private http: Http, private auth: AuthService) {
    this.http.get('http://localhost:8000/api/getsprintsforuser/' + this.auth.getUserId()).subscribe((res) => {
      this.sprints = res.json() as Sprint[];
    });
  }

  updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }

  ngOnInit() {
    console.log('Rendering performance dashboard');
  }

}

interface Sprint {
  id: number,
  name: string,
  description: string,
}


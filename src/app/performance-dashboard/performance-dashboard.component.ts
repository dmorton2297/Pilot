import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';


@Component({
  selector: 'app-performance-dashboard',
  templateUrl: './performance-dashboard.component.html',
  styleUrls: ['./performance-dashboard.component.css']
})
export class PerformanceDashboardComponent implements OnInit {

  @Output() signalEvent = new EventEmitter<string>();
  visible: boolean = false;
  teamView: boolean = false;
  public sprints: Sprint[] = [];


  constructor(private http: Http, private auth: AuthService, private state: StateService) {
    this.loadData();
  }

  loadData() {
    this.teamView = false;
    if (this.state.getCurrentStateId() == 0) {
      this.http.get('http://localhost:8000/api/getsprintsforuser/' + this.auth.getUserId()).subscribe((res) => {
        this.sprints = res.json() as Sprint[];
      });
    } else {
      this.teamView = true;
      this.http.get('http://localhost:8000/api/getsprintsforteam/' + this.state.getCurrentStateId()).subscribe((res) => {
        this.sprints = res.json() as Sprint[];
      });
    }
    
  }

  updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }

  ngOnInit() {
    console.log('Rendering performance dashboard');
  }

  onTabChanged(event) {
   // window.alert(event.index);
  }

}

interface Sprint {
  id: number,
  name: string,
  description: string,
}


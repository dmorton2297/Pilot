import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-performance-dashboard',
  templateUrl: './performance-dashboard.component.html',
  styleUrls: ['./performance-dashboard.component.css']
})
export class PerformanceDashboardComponent implements OnInit {

  @Output() signalEvent = new EventEmitter<string>();
  visible: boolean = false;
  public sprints: Sprint[] = [];


  constructor() {
   }

  updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }

  ngOnInit() {
    console.log('Rendering performance dashboard');
  }

}

interface Sprint {
  sprintId: number,
  sprintName: string,
  sprintDescription: string,
}


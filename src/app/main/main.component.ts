import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrumBoardComponent } from '../scrum-board/scrum-board.component';
import { BacklogComponent } from '../backlog/backlog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  @ViewChild(ScrumBoardComponent) scrum;
  @ViewChild(BacklogComponent) backlog;
  constructor() { }

  ngOnInit() {
  }

  receiveSignal($event) {
    this.backlog.loadData();
    this.scrum.loadData();
  }

}

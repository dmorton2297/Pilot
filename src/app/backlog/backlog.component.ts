import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css'],
  animations: [
    trigger('slideOutAnimation', [
      state('visible', style({
        display: 'block',
        opacity: 1
      })),
      state('hidden', style({
        display: 'none',
        opacity: 0

      })),
      transition('visible <=> hidden', animate('150ms', style({
        transform: 'translateX(100%)'
      }))),
    ]),
  ]
})
export class BacklogComponent implements OnInit{

  public animationState: string = 'visible';
  public slideInAnimationState: string = 'hidden';
  public sprintTasks: SprintTask[] = [];
  public viewSprintClicked = false;
  public tasks: Task[] = [];
  public displayedColumns: String[] = ['name', 'description', 'priority', 'status', 'actions'];
  public sprints: Sprint[] = [];
  public sortByName = true;
  public sortByPriority = false;

  @Output() signalEvent = new EventEmitter<string>();

  constructor(private http: Http, private router: Router, private auth: AuthService, private state: StateService) { 
    this.loadData();
  }

  ngOnInit() {
    console.log('ngoninit called here');
    this.loadData();
  }

  onCreateTask() {
    this.router.navigateByUrl('/createtask');
  }

  onCreateFuncReq() {
    this.router.navigateByUrl('/funcreq');
  }

  onCreateSprint() {
    this.router.navigateByUrl('/createsprint');
  }

  updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }

  loadData() {
    this.sprints = [];
    this.sprintTasks = [];
    if (this.state.getCurrentStateId() == 0) {
      console.log('here');
      this.http.get('http://localhost:8000/api/getusertasks/'+this.auth.id).subscribe((res) => {
        this.tasks = res.json() as Task[];
        if (this.sortByName) {
          this.sortTableName();
        } else if (this.sortByPriority) {
          this.sortTablePriority();
        }
      });

      this.http.get('http://localhost:8000/api/getsprinttasks/' + this.auth.getUserId()).subscribe((res) => {
        this.sprintTasks = res.json() as SprintTask[];
        this.sortSprintTasks();
      });
    } else {
      this.http.get('http://localhost:8000/api/getteamtasks/'+this.state.getCurrentStateId()).subscribe((res) => {
        this.tasks = res.json() as Task[];
        if (this.sortByName) {
          this.sortTableName();
        } else if (this.sortByPriority) {
          this.sortTablePriority();
        }
      });

      this.http.get('http://localhost:8000/api/getteamsprinttasks/' + this.state.getCurrentStateId()).subscribe((res) => {
        this.sprintTasks = res.json() as SprintTask[];
        this.sortSprintTasks();
      });

    }
    
  }

  sortSprintTasks() {
    this.sprints = [];
    console.log("invoked");
    // find sprint 
    var sortedSprints : Sprint[] = [];
    var knownSprintIds: number[] = [];
    for (var i = 0; i < this.sprintTasks.length; i++) {

      var exists = false;
      for (var j = 0; j < knownSprintIds.length; j++) {
        exists = (knownSprintIds[j] == this.sprintTasks[i].sprintId) ;
        if (exists) {
          break;
        }
      }
      if (!exists) {
        var foundTasks: SprintTask[] = [];
        for (var j = 0; j < this.sprintTasks.length; j++) {
          if (this.sprintTasks[j].sprintId == this.sprintTasks[i].sprintId) {
            foundTasks.push(this.sprintTasks[j]);
          }
        }
        var sprint : Sprint = {
          sprintId: this.sprintTasks[i].sprintId,
          sprintName: this.sprintTasks[i].sprintName,
          sprintDescription: this.sprintTasks[i].sprintDescription,
          tasks: foundTasks
        }
        this.sprints.push(sprint);
        knownSprintIds.push(this.sprintTasks[i].sprintId);
        console.log(sortedSprints);
      }
    }


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

  onTimePressed(id) {
    this.router.navigateByUrl('/modifytime/' + id);
  }

  onModifyPressed(id) {
    this.router.navigateByUrl('/modifytask/' + id);
  }

  onEstimatePressed(id) {
    this.router.navigateByUrl('/modifyestimate/' + id);
  }

  onViewFuncReq() {
    this.router.navigateByUrl('/viewfuncreqs/' + this.state.getCurrentStateId());
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
  
  onSortSprintPressed() {
    this.viewSprintClicked = true;
    this.animationState = (this.animationState == 'visible' ? 'hidden' : 'visible');
    this.slideInAnimationState = (this.slideInAnimationState == 'visible' ? 'hidden' : 'visible');
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

    slideOutDone() {
      if (this.viewSprintClicked) {

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
  created_at: number;
}

interface SprintTask {
  id: number,
  name: string,
  description: string,
  priority: number, 
  estimate: number, 
  status: number,
  sprintId: number,
  sprintName: string, 
  sprintDescription: string
}
interface ChangeStatusRequest {
    taskId: number,
    status: number
}

interface Sprint {
  sprintId: number,
  sprintName: string,
  sprintDescription: string,
  tasks: SprintTask[]
}

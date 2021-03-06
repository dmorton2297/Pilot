import { Component, EventEmitter, Output, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { DialogComponent } from '../dialog/dialog.component';

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
export class BacklogComponent implements OnInit {

  public animationState: string = 'visible';
  public slideInAnimationState: string = 'hidden';
  public secondSlideInAnimationState: string = 'hidden';
  public sprintTasks: SprintTask[] = [];
  public funcReqTasks: FuncReqTask[] = [];
  public viewSprintClicked = false;
  public viewFuncReqClicked = false;
  public tasks: Task[] = [];
  public task: Task[] = [];
  public displayedColumns: String[] = ['name', 'priority', 'status', 'actions', 'view'];
  public sprints: Sprint[] = []; 
  public funcReqs: FuncReq[] = [];
  public emptySprints: _Sprint[] = [];
  public emptyFuncReqs: _FuncReq[] = [];
  public sortByName = true;
  public sortByPriority = false;

  @Output() signalEvent = new EventEmitter<string>();

  constructor(private http: Http, private router: Router, private auth: AuthService, private state: StateService, public dialog: MatDialog) {
    
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

  onManageSprintPressed(sprintId) {
    this.router.navigateByUrl('/manageSprint/' + sprintId);
    this.state.sprintView = true;
  }

  onViewEstimates() {
    this.router.navigateByUrl('/time-estimates/' + this.state.getCurrentStateId());
  }

  updateSignal() {
    this.signalEvent.emit("SIG_UPDATE_TASKS");
  }

  loadData() {
    this.sprints = [];
    this.sprintTasks = [];
    this.emptySprints = [];

    this.loadFuncReqData();
    
    if (this.state.getCurrentStateId() == 0) {
      console.log('here');
      this.http.get('http://localhost:8000/api/getusertasks/' + this.auth.id).subscribe((res) => {
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
        this.http.get('http://localhost:8000/api/getsprintsforuser/' + this.auth.getUserId()).subscribe((ress) => {
          let temp : _Sprint[] = ress.json() as _Sprint[];
          for (var i = 0; i < temp.length; i++) {
            var f = false
            for (var j = 0; j < this.sprints.length; j++) {
              if (temp[i].id == this.sprints[j].sprintId) {
                f = true;
              }
            }

            if (!f && !this.emptySprintExists(temp[i].id)) {
              this.emptySprints.push(temp[i]);
            }
          }
        });
      });
    } else {
      this.http.get('http://localhost:8000/api/getteamtasks/' + this.state.getCurrentStateId()).subscribe((res) => {
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
        this.http.get('http://localhost:8000/api/getsprintsforteam/' + this.state.getCurrentStateId()).subscribe((ress) => {
          let temp : _Sprint[] = ress.json() as _Sprint[];
          for (var i = 0; i < temp.length; i++) {
            var f = false
            for (var j = 0; j < this.sprints.length; j++) {
              if (temp[i].id == this.sprints[j].sprintId) {
                f = true;
                break;
              }
            }

            if (!f && !this.emptySprintExists(temp[i])) {
              
              this.emptySprints.push(temp[i]);
            }
          }

          console.log(this.emptySprints);
        });
        
      });
    }
  }

  loadFuncReqData() {
    if (this.state.getCurrentStateId() == 0) {
      this.http.get('http://localhost:8000/api/getreqtasks/' + this.auth.getUserId()).subscribe((res) => {
      this.funcReqTasks = res.json() as FuncReqTask[];
      this.sortFuncReqTasks();  
      });
    } else {
      this.http.get('http://localhost:8000/api/getteamreqtasks/' + this.state.getCurrentStateId()).subscribe((res) => {
        this.funcReqTasks = res.json() as FuncReqTask[];
        this.sortFuncReqTasks();  
        });
    }
    
  }

  emptySprintExists(sprintId) {
    for (var i = 0; i < this.emptySprints.length; i ++) {
      if (this.emptySprints[i].id == sprintId) {
        return true;
      }
    }

    return false;
  }

  emptyFuncReqExists(funcReqId) {
    for (var i = 0; i < this.emptyFuncReqs.length; i ++) {
      if (this.emptyFuncReqs[i].id == funcReqId) {
        return true;
      }
    }

    return false;
  }

  sortSprintTasks() {
    this.sprints = [];
    console.log("invoked");
    // find sprint 
    var sortedSprints: Sprint[] = [];
    var knownSprintIds: number[] = [];
    for (var i = 0; i < this.sprintTasks.length; i++) {
      var exists = false;
      for (var j = 0; j < knownSprintIds.length; j++) {
        exists = (knownSprintIds[j] == this.sprintTasks[i].sprintId);
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
        var sprint: Sprint = {
          sprintId: this.sprintTasks[i].sprintId,
          sprintName: this.sprintTasks[i].sprintName,
          sprintDescription: this.sprintTasks[i].sprintDescription,
          tasks: foundTasks
        }
        this.sprints.push(sprint);
        knownSprintIds.push(this.sprintTasks[i].sprintId);
      }
    }



  }

  sortFuncReqTasks() {
    this.funcReqs = [];
    // find sprint 
    var sortedFuncReqs: FuncReq[] = [];
    var knownFuncReqIds: number[] = [];
    for (var i = 0; i < this.funcReqTasks.length; i++) {
      var exists = false;
      for (var j = 0; j < knownFuncReqIds.length; j++) {
        exists = (knownFuncReqIds[j] == this.funcReqTasks[i].funcreq);
        if (exists) {
          break;
        }
      }
      if (!exists) {
        var foundTasks: FuncReqTask[] = [];
        for (var j = 0; j < this.funcReqTasks.length; j++) {
          if (this.funcReqTasks[j].funcreq == this.funcReqTasks[i].funcreq) {
            foundTasks.push(this.funcReqTasks[j]);
          }
        }
        var funcReq: FuncReq = {
          id: this.funcReqTasks[i].id,
          name: this.funcReqTasks[i].funcReqName,
          description: this.funcReqTasks[i].funcReqDescription,
          tasks: foundTasks
        }
        this.funcReqs.push(funcReq);
        knownFuncReqIds.push(this.funcReqTasks[i].funcreq);
      }
    }
  }

  onStatusClicked(taskId: number) {
    var newStatus = 0;
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == taskId) {
        if (this.tasks[i].status == 0) {
          newStatus = 1;
        } else if (this.tasks[i].status == 1) {
          newStatus = 2;
        } else {
          newStatus = 0;
        }
      }
    }
    let request: ChangeStatusRequest = {
      taskId: taskId,
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

  onDeleteSprintPressed(id) {
    this.http.get('http://localhost:8000/api/deleteSprint/' + id).subscribe((res) => {
      this.loadData();
    });
  }

  onEstimatePressed(id) {
    this.router.navigateByUrl('/modifyestimate/' + id);
  }

  onViewFuncReq() {
    this.router.navigateByUrl('/viewfuncreqs/' + this.state.getCurrentStateId());
  }

  onDetailPressed(id) {
    this.http.get('http://localhost:8000/api/gettask/' + id).subscribe((res) => {
      this.task = res.json() as Task[];
      console.log(this.task[0]);

      this.dialog.open(DialogComponent, {
        width: '400px',
        data: this.task[0]
      });
    });
    
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
    if (this.animationState == 'visible'){
      this.state.sprintView = true;
    } else {
      this.state.sprintView = false;
    }
  }

  onSortFuncReqPressed() {
    this.viewFuncReqClicked = true;
    this.animationState = (this.animationState == 'visible' ? 'hidden' : 'visible');
    this.secondSlideInAnimationState = (this.secondSlideInAnimationState == 'visible' ? 'hidden' : 'visible');

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

interface FuncReqTask {
  id: number,
  name: string,
  description: string,
  priority: number, 
  estimate: number, 
  status: number,
  funcreq: number,
  funcReqName: string, 
  funcReqDescription: string
}

interface ChangeStatusRequest {
    taskId: number,
    status: number
}

interface FuncReq {
  id: number,
  name: string,
  description: string,
  tasks: FuncReqTask[];
}

interface Sprint {
  sprintId: number,
  sprintName: string,
  sprintDescription: string,
  tasks: SprintTask[]
}

interface _Sprint {
  id: number,
  name: string,
  description: string
}

interface _FuncReq {
  id: number,
  name: string,
  description: string
}

@Component({
  selector: 'dialog-task-detail',
  templateUrl: 'dialog-task-detail.html',
})
export class DialogTaskDetail {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Task) { }
}

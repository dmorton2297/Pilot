import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';



@Component({
  selector: 'app-task-distribution',
  templateUrl: './task-distribution.component.html',
  styleUrls: ['./task-distribution.component.css']
})
export class TaskDistributionComponent implements OnInit {

  @Input() height: string;
  @Input() width: string;
  @Input() sprint: string;
  @Input() team: string;

  view: any[];

  data: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Task Status';
  showYAxisLabel = true;
  yAxisLabel = '# of tasks';

  colorScheme = {
    domain: ['#A10A28', '#C7B42C', '#5AA454']
  };

  constructor(private http: Http, private auth: AuthService, private state: StateService) { 
    
  }

  ngOnInit() {
    this.view = [200, 500];
    if (this.sprint != '0' && this.team == '0') {
      this.http.get('http://localhost:8000/api/getStatusDistributionForUserSprint/' + this.auth.getUserId() + '/' + this.sprint).subscribe((res) => {
        this.data = res.json();
      });
    } else if(this.sprint != '0' && this.team != '0') {
      this.http.get('http://localhost:8000/api/getStatusDistributionForTeamSprint/' + this.state.getCurrentStateId() + '/' + this.sprint).subscribe((res) => {
        this.data = res.json();
      });
    } else {
      this.http.get('http://localhost:8000/api/getStatusDistributionForUser/' + this.auth.getUserId()).subscribe((res) => {
        this.data = res.json();
      });
    }
    
  }

}

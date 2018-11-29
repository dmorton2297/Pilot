import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../state.service';


@Component({
  selector: 'app-team-task-distribution',
  templateUrl: './team-task-distribution.component.html',
  styleUrls: ['./team-task-distribution.component.css']
})
export class TeamTaskDistributionComponent implements OnInit {
  @Input() height: string;
  @Input() width: string;
  @Input() sprint: string;

  message = 'Task Status Distribution';
  view: any[];
  data: any[];

 
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Task Status';
  showYAxisLabel = true;
  yAxisLabel = '# of tasks';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
};

  constructor(private http: Http, private state: StateService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  loadData() {
    if (this.sprint == '0') {
      this.message = 'Task Status Distribution';
      this.http.get('http://localhost:8000/api/getStatusDistributionForTeam/' + this.state.getCurrentStateId()).subscribe((res) => {
        this.data = res.json();
        this.view = [200, 500];

  
      });
    } else {
      this.message = 'Team Member Status Distribution';
      this.http.get('http://localhost:8000/api/getStatusDistributionForTeamMembersInSprint/' + this.state.getCurrentStateId() + '/' + this.sprint).subscribe((res) => {
        this.data = res.json();
        this.view = [200, 500];

      });
    }
    
  }

  ngOnInit() {
    this.loadData();

  }

}

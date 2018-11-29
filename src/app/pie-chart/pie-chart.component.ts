import { Component, OnInit, Input} from '@angular/core';
import { Http } from '@angular/http';
import { StateService } from '../state.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  view: any[];
  data: any[];
  @Input() height: string;
  @Input() width: string;
  @Input() sprint: string;
  @Input() time: string;


  message = 'Completed Task Breakdown';

  // options
  showLegend = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  constructor(private http: Http, private state: StateService) { 

  }

  loadData() {
    if (this.time == '0') {
      this.message = 'Completed Task Breakdown';

      this.http.get('http://localhost:8000/api/getNumberOfCompletedSprintTasksPerTeamMember/' + this.state.getCurrentStateId()+'/'+this.sprint).subscribe((res) => {
      this.data = res.json();
      });
    } else {
      this.message = 'Team Member Contribution (hrs)'
      this.http.get('http://localhost:8000/api/getTimeSpentDistributionForSprint/' + this.state.getCurrentStateId()+'/'+this.sprint).subscribe((res) => {
      this.data = res.json();
    });
    }
    
  }

  ngOnInit() {
    this.view = [200, 500];
    this.loadData();
  }


}

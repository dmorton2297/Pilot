import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-task-distribution',
  templateUrl: './task-distribution.component.html',
  styleUrls: ['./task-distribution.component.css']
})
export class TaskDistributionComponent implements OnInit {

  @Input() height: string;
  @Input() width: string;

  view: any[];

  data: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = '# of tasks';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private http: Http, private auth: AuthService) { 
    this.view = [200, 500];
    this.http.get('http://localhost:8000/api/getStatusDistributionForUser/' + this.auth.getUserId()).subscribe((res) => {
      this.data = res.json();
    });
  }

  ngOnInit() {
    console.log(width);

  }

}

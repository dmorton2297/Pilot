import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-team-task-distribution',
  templateUrl: './team-task-distribution.component.html',
  styleUrls: ['./team-task-distribution.component.css']
})
export class TeamTaskDistributionComponent implements OnInit {
  @Input() height: string;
  @Input() width: string;

  teamId: string;

  view: any[];
  data: any[];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'User';
  showYAxisLabel = true;
  yAxisLabel = '# of tasks';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private http: Http, private auth: AuthService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.view = [200, 500];
    this.http.get('http://localhost:8000/api/getStatusDistributionForTeam/' + '1').subscribe((res) => {
      this.data = res.json();

    });


  }

  ngOnInit() {
  }

}

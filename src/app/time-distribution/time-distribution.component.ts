import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '@../auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-time-distribution',
  templateUrl: './time-distribution.component.html',
  styleUrls: ['./time-distribution.component.css']
})
export class TimeDistributionComponent implements OnInit {
  teamId: string;
  @Input() height: string;
  @Input() width: string;

  view: any[];
  data: any[];

  // options
  showLegend = true;
  showLabels = true;
  


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private http: Http, private auth: AuthService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');

    this.view = [200, 500];
    this.http.get('http://localhost:8000/api/getTimeSpent/' + this.teamId).subscribe((res) => {
    this.data = res.json();
    });
  }

  ngOnInit() {
  }

}

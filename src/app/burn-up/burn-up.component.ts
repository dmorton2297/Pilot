import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-burn-up',
  templateUrl: './burn-up.component.html',
  styleUrls: ['./burn-up.component.css']
})
export class BurnUpComponent implements OnInit {

  @Input() height: string;
  @Input() width: string;
  @Input() sprintId: string;

  view: any[];

  data: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = '';
  yAxisLabel = 'Hours';

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };

  constructor(private http: Http) {
    
   }

  ngOnInit() {
    console.log(this.sprintId);
    this.http.get('http://localhost:8000/api/getSprintBurndownData/' + this.sprintId).subscribe((res) => {
      this.data = res.json();
      this.view = [this.height, this.width];

    });
  }

}

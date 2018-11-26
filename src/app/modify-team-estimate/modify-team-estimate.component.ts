import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-modify-team-estimate',
  templateUrl: './modify-team-estimate.component.html',
  styleUrls: ['./modify-team-estimate.component.css']
})
export class ModifyTeamEstimateComponent implements OnInit {
  taskForm = this.fb.group({
    teamid: [''],
    estimate: ['', Validators.required]
  });

  public teamId: string;

  constructor(private fb: FormBuilder, private http: Http, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/api/getteamestimate/' + this.teamId).subscribe((res) => {
      if (res.json() != -1 && res.json() != "") {
        console.log("Team Estimate");
        console.log(res.json());
        var temp : TeamEstimate[] = res.json() as TeamEstimate[];
        var t = temp[0];
        this.taskForm.controls['estimate'].setValue(t.estimate);
        this.taskForm.controls['teamid'].setValue(t.teamid);
      }
    });
  }

  ngOnInit() {
    
  }
  onSubmit() {
    let request: TeamEstimate = {
      teamid: parseInt(this.teamId),
      estimate: this.taskForm.get('estimate').value
    }

    if (this.taskForm.get('estimate').value < 0) {
      this.snackBar.open('Estimate must be greater than zero!', 'Ok', {
        duration: 3000
      });
      return;
    }

    // Search for team estimate
    this.http.get('http://localhost:8000/api/getteamestimate/' + this.teamId).subscribe((res) => {
      if (res.json()  == -1) {
        this.http.post('http://localhost:8000/api/saveteamestimate', request).subscribe((res) => {
          console.log(res);
          this.location.back();
        });
      } else {
        this.http.post('http://localhost:8000/api/updateteamestimate/' + this.teamId, request, this.teamId).subscribe((res) => {
          console.log(res);
          this.location.back();
        });
      }
    });


    this.snackBar.open('Estimate Set', 'Ok', {
      duration: 3000
    });

  }
  onCancel() {
    this.location.back();
  }

}


interface TeamEstimate {
  teamid: number,
  estimate: number
}

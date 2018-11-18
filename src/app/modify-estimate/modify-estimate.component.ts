import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-modify-estimate',
  templateUrl: './modify-estimate.component.html',
  styleUrls: ['./modify-estimate.component.css']
})
export class ModifyEstimateComponent {
    taskForm = this.fb.group({
      estimate: ['']
    });

  taskId: string;
  public task : Task;

  constructor(private fb: FormBuilder, private http: Http, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.taskId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/api/getestimate/' + this.taskId).subscribe((res) => {
      var temp : TimeEstimate[] = res.json() as TimeEstimate[];
      var t = temp[0];
      this.taskForm.controls['estimate'].setValue(t.estimate);
    });
  }


  onSubmit() {
    let temp = this.taskId;
    let request: ModifyEstimateRequest = {
      taskId: +this.taskId,
      estimate: this.taskForm.get('estimate').value
    }

    this.http.post('http://localhost:8000/api/updateestimate', request).subscribe((res) => {
      console.log(res);
      this.location.back();
    });

    this.snackBar.open('Task modified', 'Ok', {
      duration: 3000
    });

  }
  onCancel() {
    this.router.navigateByUrl('/backlog');
  }

}

interface Task {
  id: string,
  estimate: number
}

interface ModifyEstimateRequest {
  taskId: number,
  estimate: number
}

interface TimeEstimate {
  estimate: number
}


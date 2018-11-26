import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-modify-time',
  templateUrl: './modify-time.component.html',
  styleUrls: ['./modify-time.component.css']
})
export class ModifyTimeComponent implements OnInit{
  taskForm = this.fb.group({
    time: ['']
    

  });

  taskId: string;
  public task : Task;
  public time = 0;

  constructor(private fb: FormBuilder, private http: Http, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.taskId = this.activatedRoute.snapshot.paramMap.get('taskId');
    this.http.get('http://localhost:8000/api/gettimespent/' + this.taskId).subscribe((res) => {
      var temp : TimeSpent[] = res.json() as TimeSpent[];
      var t = temp[0];
      console.log(t.timespent);
      this.taskForm.controls['time'].setValue(t.timespent);
    });
  }

  ngOnInit() {
    
  }
  onSubmit() {
    let temp = this.taskId;
    let request: ModifyTimeRequest = {
      taskId: +this.taskId,
      time: this.taskForm.get('time').value
    }

    if (this.taskForm.get('time').value < 0) {
      this.snackBar.open('Estimate must be greater than zero!', 'Ok', {
        duration: 3000
      });
      return;
    }

    this.http.post('http://localhost:8000/api/updatetime', request).subscribe((res) => {
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
  timespent: number
}

interface ModifyTimeRequest {
  taskId: number,
  time: number
}

interface TimeSpent {
  timespent: number
}

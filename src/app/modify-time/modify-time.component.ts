import { Component } from '@angular/core';
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
export class ModifyTimeComponent {
  taskForm = this.fb.group({
    time: ['']
    

  });

  public time = 0;
  taskId: string;
  public task : Task;

  constructor(private fb: FormBuilder, private http: Http, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.taskId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/api/gettask/' + this.taskId).subscribe((res) => {
      this.taskForm.patchValue({ time: this.task[0].timespent });
    });

  }
  onSubmit() {
    let request: Task = {
      id: this.taskId,     
      timespent: this.taskForm.get('timespent').value
    }

    this.http.post('http://localhost:8000/api/modifytask/' + this.taskId, request, this.taskId).subscribe((res) => {
      this.router.navigateByUrl('/backlog');
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

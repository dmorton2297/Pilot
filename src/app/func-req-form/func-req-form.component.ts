import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-func-req-form',
  templateUrl: './func-req-form.component.html',
  styleUrls: ['./func-req-form.component.css']
})

export class FuncReqFormComponent {
    reqForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      teamid: ['']
  });

  public tasks : Task[] = [];
  
  constructor(private fb: FormBuilder, private http: Http, public snackBar: MatSnackBar, private location: Location,  private router: Router, private state: StateService, private auth: AuthService) { 

  }

  onSubmit() {
    let request : FunctionalRequirement = {
      name: this.reqForm.get('name').value as string,
      description: this.reqForm.get('description').value as string,
      teamid: this.state.getCurrentStateId()
    }
    this.http.post('http://localhost:8000/api/savereq', request).subscribe();
      this.snackBar.open('Functional Requirement Created', 'Ok', {
        duration: 3000
    });
      this.location.back();
    }

  onBack() {
    this.router.navigateByUrl('/backlog');
  }
}

interface FunctionalRequirement {
  name: string,
  description: string,
  teamid: number
}

interface Task {
  id: number,
  name: string,
  description: string,
  priority: number,
  status: number,
  funcreq: any,
  estimate: number,
  timespent: number,
  teamid: number,
  creatorid: number,
  assigneduserid: number,
}

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
  selector: 'app-modify-funcreq',
  templateUrl: './modify-funcreq.component.html',
  styleUrls: ['./modify-funcreq.component.css']
})
export class ModifyFuncreqComponent {
  reqForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    teamid: ['']
});

public req : FunctionalRequirement;
public id;

constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private http: Http, public snackBar: MatSnackBar, private location: Location,  private router: Router, private state: StateService, private auth: AuthService) { 
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  this.http.get('http://localhost:8000/api/funcreq/' + this.id).subscribe((res) => {
    if (res.json() != -1) {
      this.req = res.json() as FunctionalRequirement;
      this.reqForm.patchValue({name: this.req[0].name});
      this.reqForm.patchValue({description: this.req[0].name});
      this.reqForm.patchValue({teamid: this.req[0].teamid});
    }
  });
}

  onSubmit() {
    let request : FunctionalRequirement = {
      name: this.reqForm.get('name').value as string,
      description: this.reqForm.get('description').value as string,
      teamid: this.reqForm.get('teamid').value as number
    }
    this.http.post('http://localhost:8000/api/modifyfuncreq/' + this.id, request, this.id).subscribe();
      this.snackBar.open('Functional Requirement Modified', 'Ok', {
        duration: 3000
    });
    this.router.navigateByUrl('/backlog');
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

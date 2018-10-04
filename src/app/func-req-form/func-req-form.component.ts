import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';

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
  
  constructor(private fb: FormBuilder, private http: Http, private location: Location) { 
    this.http.get('http://localhost:8000/api/getusertasks/0').subscribe((res) => {
        this.tasks = res.json() as Task[];
      });
  }

  onSubmit() {
    let request : FunctionalRequirement = {
      name: this.reqForm.get('name').value as string,
      description: this.reqForm.get('description').value as string,
      teamid: 0
    }
      this.http.post('http://localhost:8000/api/savereq', request).subscribe();
      window.alert('Requirement Added');
      this.reqForm.reset();
    }

  onBack() {
    this.location.back();
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

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})

export class CreateTeamComponent{
  teamForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      invitemsg: [''],
      members: [''],
      color: ['', Validators.required]
});

  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.teamForm.get('invitemsg').setValue('I want you to join my team!');
    console.log(this.teamForm);
  }

  setColor(c: string) {
    this.teamForm.patchValue({color: c});
  }

  fillerusers = ['Caden', 'Charlie', 'Dylan', 'John', 'Jackson'];
  getUsers() {

  }

  onSubmit() {
    console.log(this.teamForm);
    let request : Team = {
      name: this.teamForm.get('name').value as string,
      description: this.teamForm.get('description').value as string,
      invitemsg: this.teamForm.get('invitemsg').value as string,
      color: this.teamForm.get('color').value as string, 
      creatorId: this.auth.getUserId()
    }
    this.http.post('http://localhost:8000/api/createteam', request).subscribe((res) => {
      console.log(res);
    });

    // Send Invites
    this.snackBar.open('Team Created', 'Ok', {
      duration: 3000
    });
  }

  onCancel() {
    this.snackBar.open('Team Creation Canceled', 'Ok', {
      duration: 3000
    });
    this.teamForm.reset();
    this.router.navigateByUrl('/');
  }     
}

interface Team {
  name: string,
  description: string,
  invitemsg: string,
  color: any
  creatorId: number
}

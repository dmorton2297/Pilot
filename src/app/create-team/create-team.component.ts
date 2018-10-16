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
      mess: [''],
      teamLeadId: [''],
      members: [''],
      color: ['', Validators.required]
});

  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.teamForm.get('mess').setValue('I want you to join my team!');
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
      mess: this.teamForm.get('mess').value as string,
      teamLeadId: 0, 
      color: this.teamForm.get('color').value as string
    }
    // Create Team
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
  mess: string,
  teamLeadId: number,
  color: any
}
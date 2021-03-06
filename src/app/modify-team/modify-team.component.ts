import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modify-team',
  templateUrl: './modify-team.component.html',
  styleUrls: ['./modify-team.component.css']
})

export class ModifyTeamComponent{
  teamForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      invitemsg: [''],
      members: [''],
      color: ['', Validators.required]
});

  public teamId : string;
  public team: Team;
  public toggle : string;
  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');

    /* Getting team form values */
    this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe((res) => {
      this.team = res.json() as Team;
      this.teamForm.patchValue({name: this.team[0].name});
      this.teamForm.patchValue({description: this.team[0].description});
      this.teamForm.patchValue({invitemsg: this.team[0].invitemsg});
      this.teamForm.patchValue({color: this.team[0].color});
      this.toggle = this.team[0].color;
      console.log(res.json());
      console.log(this.toggle);
    });  
  }

  setColor(c: string) {
    this.teamForm.patchValue({color: c});
    this.toggle = c;
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

    this.http.post('http://localhost:8000/api/modifyteam/' + this.teamId, request).subscribe((res) => {
      this.snackBar.open('Team Updated', 'Ok', {
        duration: 3000
      });
    });
    this.router.navigateByUrl('/teams');
  }

  onCancel() {
    this.snackBar.open('Team Modification Canceled', 'Ok', {
      duration: 3000
    });
    this.teamForm.reset();
    this.router.navigateByUrl('/teams');
  }     
}

interface Team {
  name: string,
  description: string,
  invitemsg: string,
  color: any,
  creatorId: number
}

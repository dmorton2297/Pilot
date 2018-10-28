import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-invite-to-team',
  templateUrl: './invite-to-team.component.html',
  styleUrls: ['./invite-to-team.component.css']
})
export class InviteToTeamComponent implements OnInit {
  taskForm = this.fb.group({
    email: ['', Validators.required],
    invmessage: ['', Validators.required]
});
  constructor(private fb: FormBuilder) { }

  teamName: string = 'Software Engineering Team';
  ngOnInit() {
  }

  onSubmit() {
    console.log('The user has clicked submit');
  }

  onCancel() {
    console.log('The user has clicked cancel');
  }

}

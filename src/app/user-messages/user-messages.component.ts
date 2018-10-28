import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, public snackBar: MatSnackBar, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}

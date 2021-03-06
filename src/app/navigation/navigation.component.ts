import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onTeamsPressed() {
    this.router.navigateByUrl('/teams');
  }

  onPilotPressed() {
    this.router.navigateByUrl('/');
  }

  onMessagesPressed() {
    this.router.navigateByUrl('/messages');
  }

}

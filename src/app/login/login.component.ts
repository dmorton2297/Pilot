import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from '@angular/http'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'google-signin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(ngZone: NgZone, private http: Http, private auth: AuthService, private router: Router) { 
    const _self = this;
    window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
  }

  ngOnInit() {

  }

  onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();
    let userRequest : UserRequest = {
      name: profile.getName() as string,
      email: profile.getEmail() as string
    }

    //window.alert(profile.getName())
    //window.alert(profile.getEmail())
    this.http.post('http://localhost:8000/api/saveuser', userRequest).subscribe((res) => {
      this.router.navigateByUrl('/');
    });
    //send user info to backend https://developers.google.com/identity/sign-in/web/backend-auth 

  }

}

interface UserRequest {
  name: string
  email: string
}

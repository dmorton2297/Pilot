import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'google-signin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(ngZone: NgZone) { 
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
    
    //send user info to backend https://developers.google.com/identity/sign-in/web/backend-auth 

  }

}

interface UserRequest {

  name: string
  email: string
}

import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from '@angular/http'
import { AuthService } from '../auth.service';
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
      this.http.get('http://localhost:8000/api/getuserid/' + profile.getEmail()).subscribe((r) => {
      var temp = r.json() as Id;
      console.log(temp);
      var id = temp[0].id;
      console.log(id);
      this.auth.setName(profile.getName());
      this.auth.setEmail(profile.getEmail());
      this.auth.setUserId(id);
      this.router.navigateByUrl('/');
      });
    });
  }
      
    //send user info to backend https://developers.google.com/identity/sign-in/web/backend-auth 

}

interface UserRequest {
  name: string
  email: string
}

interface Id {
  id: number;
}


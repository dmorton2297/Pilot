import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  id: number;
  email: string;
  name: string;

  loggedIn: boolean = false;

  

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

  setUserId(_id) {
    this.id = _id;
  }

  setEmail(_email) {
    this.email = _email;
  }

  setName(_name) {
    this.name = _name;
  }

  getUserId() {
    return this.id;
  }

  setLoggedIn() {
    this.loggedIn = true;
  }

  setLoggedOut() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  setUser(user){

  }
}

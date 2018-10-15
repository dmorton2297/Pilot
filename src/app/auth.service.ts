import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  id: number;
  email: string;
  name: string;

  constructor() { }

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

  setUser(user){

  }
}

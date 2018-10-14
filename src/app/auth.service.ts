import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  id: number;
  userName: string;
  name: string;

  constructor() { }

  setUserId(_id) {
    this.id = _id;
  }

  setUserName(_userName) {
    this.userName = _userName;
  }

  setName(_name) {
    this.name = _name;
  }

  getUserId() {
    return this.id;
  }
}

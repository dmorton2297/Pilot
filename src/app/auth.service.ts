import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  id: number;
  constructor() { }

  setUserId(_id) {
    this.id = _id;
  }

  getUserId() {
    return this.id;
  }
}

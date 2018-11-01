import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public teamView: boolean = false;
  public teamId: number = 0;

  public userView: boolean = true;

  constructor() { }

  updateState(id) {
    if (id == 0) {
      this.teamId = id;
      this.userView = true;
      this.teamView = false;
    } else {
      this.teamId = id;
      this.userView = false;
      this.teamView = true;
    }
  }

  getCurrentStateId() {
    return this.teamId;
  }
}

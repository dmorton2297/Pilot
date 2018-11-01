import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public teamView: boolean = false;
  public teamId: number = 0;

  public userView: boolean = true;

  constructor() { }
}

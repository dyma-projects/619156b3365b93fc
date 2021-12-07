import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  public addUser(name: string): void {
    this.users.value.push(name);
  } 
    
  constructor() { }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BasicService {

  Users = [
    'Joe', 'Jim', 'Jacob'
  ];
  constructor() { }

  getUsers() {
    return this.Users;
  }
}

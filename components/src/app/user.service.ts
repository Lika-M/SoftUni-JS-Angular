import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';

// @Injectable({
//   providedIn: 'root'
// })
export class UserService {

  users = [
    {
      firstName: 'John',
      age: 23
    },
    {
      firstName: 'Mary',
      age: 48
    }
  ];

  constructor() { }

  addNewUserHandler(newUser: IUser){
    //lifecycle hook ngOnChange ==>
    //exclusively change reference! and don\'t use just push
    this.users = this.users.concat(newUser);
  }
}

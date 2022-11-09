import { Inject, Injectable } from '@angular/core';
import { myStringInjectionToken } from './app.module';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
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

  constructor(@Inject(myStringInjectionToken) myString: string) {
    console.log(myString)
   }

  addNewUserHandler(newUser: IUser){
    //lifecycle hook ngOnChange ==>
    //exclusively change reference! and don\'t use just push
    this.users = this.users.concat(newUser);
  }
}

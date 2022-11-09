import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
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

  addNewUserHandler(newUser: IUser){
    this.users = this.users.concat(newUser);
  }

  title = 'Components';
}

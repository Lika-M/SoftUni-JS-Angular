import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details', // changed selector
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class UserDetailsComponent implements OnInit { // and changed class name

  constructor(userService: UserService) { }

  ngOnInit(): void {
  }

  

}

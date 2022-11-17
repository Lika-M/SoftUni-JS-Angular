import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details', // changed selector
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class UserDetailsComponent implements OnInit { // and changed class name

  constructor(private activatedRoute: ActivatedRoute) {  // service (to get params) used only in components
    console.log(this.activatedRoute.snapshot.params) // without dynamic changes like previous>> and next>>
    this.activatedRoute.params.subscribe(console.log) //used with
  }

  ngOnInit(): void {
  }



}

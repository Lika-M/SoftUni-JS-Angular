import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {

  myProp:string = 'Hello World!';

  // constructor() {
  //   setTimeout(() => {
  //     this.myProp = 'Hello Jupiter!'
  //   }, 3000)
  //  }

  users = [
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Mary',
      lastName: 'Greenwood'
    }
  ]

  ngOnInit(): void { ///Lifecycle hook
  }



}

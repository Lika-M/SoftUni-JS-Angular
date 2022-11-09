import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from '../interfaces/user';

const myStaticNumber: number = 4;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  @Input() users!: IUser[];
  @Output() addUser = new EventEmitter<IUser>();


  // constructor() {
  //   setTimeout(() => {
  //     this.myProp = 'Hello Jupiter!'
  //   }, 3000)
  //  }

  ngOnInit(): void {           ///Lifecycle hook
    console.log(this.users);
    // debugger;
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(simpleChanges);
    // debugger;
  }

  addNewUser(firstNameInput: HTMLInputElement, ageInput: HTMLInputElement): void {
    const { value: firstName } = firstNameInput;
    const { valueAsNumber: age } = ageInput;

    this.addUser.emit({firstName, age})

    firstNameInput.value = '';
    ageInput.value = '';
  }


  public staticNum = myStaticNumber;



}

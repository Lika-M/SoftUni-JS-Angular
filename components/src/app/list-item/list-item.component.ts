import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IUser } from '../interfaces/user';



@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent {

  @Input() user!: IUser;

  constructor() { }

}

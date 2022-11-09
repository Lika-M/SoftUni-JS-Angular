import { Component, EventEmitter, Input, Output,  ChangeDetectionStrategy } from '@angular/core';
import { IUser } from '../interfaces/user';



@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class ListItemComponent {

  @Input() user!: IUser;

  constructor() { }

}

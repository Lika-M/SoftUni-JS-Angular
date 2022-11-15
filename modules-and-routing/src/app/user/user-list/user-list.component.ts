import { Component, OnInit } from '@angular/core';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: IUser[];

  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
    ) { }

  ngOnInit(): void {
    this.globalLoaderService.showLoader('Loading users...');
    this.userService.loadUsers().subscribe({

      next: (users) => {
        this.globalLoaderService.hideLoader();
        this.users = users;
      }
      
    });
  }

}

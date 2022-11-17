import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ // nested routing in array
        {
        path: 'user/list',
        component: UserListComponent
      },
      {
        path: 'user/details',
        component: UserDetailsComponent
      }
    ])
  ],
  exports: [
    UserListComponent,
    UserDetailsComponent
  ]
})
export class UserModule { }

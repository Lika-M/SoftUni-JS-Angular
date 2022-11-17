import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { UserDetailsComponent } from './user/details/details.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user/list', //absolute path
  },
  {
    path: 'post/list',
    component: PostListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const AppRoutingModule = RouterModule.forRoot(routes); - instead of

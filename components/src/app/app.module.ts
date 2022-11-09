import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { UserService } from './user.service';

// just const like symbols --> wrapper to provide a string without duplication
export const myStringInjectionToken = new InjectionToken('myString');

@NgModule({
  // Template specific items
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule, //this includes CommonModule
    AppRoutingModule
  ],
  providers: [
    UserService,
    // { // Used for Dependency injection

    // provide: UserService,
    // useClass: UserService,
    // useValue: {
    //   users: [{firstName: 'Gosh', age: 66}],
    //   addNewUserHandler(){alert('Don\' do that!')}
    // }
  // }, 
{
  provide: myStringInjectionToken,
  useValue: 'Hello World!'
}
],

  bootstrap: [AppComponent]
})
export class AppModule { }

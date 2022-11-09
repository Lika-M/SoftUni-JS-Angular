import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { UserService } from './user.service';

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
  providers: [{ // Used for Dependency injection
    provide: UserService,
    useClass: UserService
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

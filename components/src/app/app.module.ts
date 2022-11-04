import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  // Template specific items
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule, //this includes CommonModule
    AppRoutingModule
  ],
  providers: [], // Used for Dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }

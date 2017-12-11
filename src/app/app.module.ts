import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { Test1Component } from './component/test1/test1.component';
import { Test2Component } from './component/test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

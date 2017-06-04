import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import {AboutComponent, AppComponent, NamesComponent} from './app.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: NamesComponent},
      {path: 'about', component: AboutComponent}
    ]),
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, AboutComponent, NamesComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule {}
